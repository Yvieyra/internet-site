const router = require('express').Router();
const { restart } = require('nodemon'); //NEED TO USE THIS?
const { Category, Product } = require('../../models');

// `/api/categories` endpoints listed below

// find all categories, be sure to include its associated Products
router.get('/', async (req, res) => { //OK connection
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    
    res.status(500).json(err);
  }
});

// find one category by its `id` value, be sure to include its associated Products
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findBtPk(req.params.id, {
      include: [{ model: Product }]
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No Category found with this id!' });
      return;
    }
    res.status(500).json(categoryData)
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new category
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: params.req.body.id,
      }
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No Category with this Id to update!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destory(req.body, {
      where: {
        id: params.req.body.id,
      }
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No Category with this Id to delete!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
