const PostSchema = require("../models/post.js")


const getPosts  = async(req,res) => {
try{
const getPosts = await PostSchema.find();
res.status(200).json(getPosts)
}
catch(error){
res.status(500).json({msg: error.message})
}

}

const createPost = async(req,res) => {
    try{
    const newPost = await PostSchema.create(req.body);
    res.status(201).json(newPost)
    }
    catch(error){
    res.status(500).json({msg: error.message})
    }
    
    }

    const updatePost = async (req, res) => {
      try {
        const { id } = req.params;
    
        if (!id) {
          return res.status(400).json({ msg: 'ID parametresi eksik' });
        }
    
        const updatedPost = await PostSchema.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedPost) {
          return res.status(404).json({ msg: 'Post bulunamadı' });
        }
    
        res.status(200).json(updatedPost);
      } catch (error) {
        res.status(500).json({ msg: error.message });
      }
    };
    
  
        const deletePost = async (req, res) => {
            const { id } = req.params;
            try {
              const deletedPost = await PostSchema.findByIdAndDelete(id); // 'id' parametresini kullanıyoruz.
              if (!deletedPost) {
                return res.status(404).json({ msg: "Post not found" });
              }
              res.status(200).json({ msg: "Silme işlemi başarılı" });
            } catch (error) {
              res.status(500).json({ msg: error.message });
            }
          };
          

            module.exports = { createPost, getPosts, updatePost, deletePost }