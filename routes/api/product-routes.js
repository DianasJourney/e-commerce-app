const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

router.get('/', async (req, res) => {
  // this will find all the products
  try {
    const productData = await Product.findAll({
      include: [{ model: Category }, { model: Tag }],
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/:id', async(req, res) => {
  // this will get a single product and it's associated id
  try {
    const productData = await Product.findByPk(req.params.id, {
      // this will include the category and tag
      include: [{ model: Category }, { model: Tag }],
    });
    if (!productData) {
      res.status(404).json({ message: 'Unable to find product with that id!' });
      return;
    }
    res.status(200).json(ProductData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// this will create a new product
router.post('/', (req, res) => {
  Product.create(req.body)
    .then((product) => {
      if (req.body.tagIds.length) {
        const productTagIds = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIds);
      }
      // if there are no product tags it will just respond else it will return and error
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      res.status(400).json(err);
    });
});

// product update
router.put('/:id', (req, res) => {
  Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    .then((product) => {
      return ProductTag.findAll({ where: { product_id: req.params.id } });
    })
    .then((productTags) => {
      // this will get the list of tags
      const productTagIds = productTags.map(({ tag_id }) => tag_id);
      // creates a new filtered list of tags
      const newProductTags = req.body.tagIds
        .filter((tag_id) => !productTagIds.includes(tag_id))
        .map((tag_id) => {
          return {
            product_id: req.params.id,
            tag_id,
          };
        });
      const productTagsToRemove = productTags
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
        .map(({ id }) => id);

      return Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ]);
    })
    .then((updatedProductTags) => res.json(updatedProductTags))
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.delete('/:id', async (req, res) => {
  // delete one product by its `id` value
  try {
    const productDelete = await Product.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!productDelete) {
      res.status(404).json({
        message: "Unable to find a product with this id."
      })
    }
    res.status(200).json(productDelete);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;