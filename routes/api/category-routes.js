const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/', async (req, res) => {
//this will find the categories of the product
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }]
    });
    if(!categoryData) {
      res.status(404).json({message: "Couldn't find category!"});
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    //this will find the product catergory by the PK id
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    if(!categoryData) {
      res.status(404).json({message: "Can't find category id!"});
    }
    res.status(200).json(categoryData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/', async (req, res) => {
  // this will create a new category
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updatedCategory = await Category.update({
      id: req.params.id,
      category_name: req.body.category_name
    }, {
      where: {id: req.params.id}
    });
    if(!updatedCategory[0]) {
      res.status(404).json({message:"Can't find category!"});
    }
    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete('/:id', async (req, res) => {
  // this function will delete by id value
  try{
    const deletedCategory = await Category.destroy(
      {
        where: {
          id: req.params.id
        }
      }
    );
    if(!deletedCategory) {
      res.status(404).json({message: "Can't find category!"});
    }
    res.status(200).json(deletedCategory);
  } catch {
    res.status(500).json(error);
  }
});

module.exports = router;