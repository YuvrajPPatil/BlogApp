const {Schema,model}=require('mongoose');
const { schema } = require('./user');

const blogSchema= new Schema(
    {
        title:{
            type: String,
            required:true,
        },
        body:{
            type: String,
            required : true,
        },

        coverImage:{
            type: String,
            required:true
        },
        createdBy:{
            type: Schema.Types.ObjectId,
            ref: "user",
        },

    },
    {
        timestamps:true,
    }
 );
 const Blog=model('blog',blogSchema);
 
 module.exports=Blog;