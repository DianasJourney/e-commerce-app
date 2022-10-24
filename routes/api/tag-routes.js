const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const tagData  = await Tag.findAll({
      include: [{ model: Product }],
    });
    if(!tagData) {
      res.status(404).json({message: "The tag does not exist"});
    }
    res.status(200).json(tagData);
  } catch (error) {
    res.status(500).json(error)
  }
});

router.get('/:id', async (req, res) => {
//finds the tag by single id
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    if(!tagData) {
      res.status(404).json({message: "Unable to find tag id."});
    }
    res.status(200).json(tagData);
  } catch (error) {
    res.status(500).json(error)
  }
});

router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create(req.body);
    res.status(200).json(newTag);
  } catch (error) {
    res.status(500).json(error)
  }
});
//updating tag 
router.put('/:id', async (req, res) => {
  try {
    const updatedTag = await Tag.update(req.body,
    {
      where: {
        id:req.params.id
      }
    }
    );
    if(!updatedTag[0]) {
      res.status(404).json({message: "Unable to find this tag id."});
    }
    res.status(200).json(updatedTag);
  } catch (error) {
    res.status(500).json(error)
  }
});

router.delete('/:id', async (req, res) => {
//deletes tag by id value
  try {
    const deletedTag = await Tag.destroy(
      {
        where: {id: req.params.id}
      }
    );
    if(!deletedTag) {
      res.status(404).json({message: "Unable to find tag."})
    }
    res.status(200).json(deletedTag);
  } catch (error) {
    res.status(500).json(error)
  }
});

module.exports = router;
