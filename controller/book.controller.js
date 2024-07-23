import '../model/connection.js';
import BookSchemaModel from '../model/book.model.js';
import  url from 'url'
import fileUpload from 'express-fileupload';
import path from 'path';



const __dirname= url.fileURLToPath(new URL('.',import.meta.url));  

export var save = async(req,res)=>{
     var bookDetails = req.body;
    //  var icon = req.files;
    //  console.log(icon);
      var icon= req.files.icon;
      // var image = Date.now()+"-"+rs.generate()+"-"+icon.name;
      var image = Date.now()+"-"+icon.name;
        bookDetails.image = image;

    var uploadpath=path.join(__dirname,"../../frontend/public/assests/upload",image);
   var bookList = await BookSchemaModel.find();
     var l = bookList.length;
     var  _id = l == 0?1 : bookList[l-1]._id+1;
     bookDetails = {...bookDetails, "_id":_id,"info":Date()}
try{
    var book = await BookSchemaModel.create(bookDetails);
    if(book)
    {
        icon.mv(uploadpath);
        console.log(book);
        res.status(201).json({"status":true})
    }
    else
    {
        res.status(500).json({"status":false});
    }
}
catch(err){
    console.log(err);
res.status(404).json({"status" : "fail"})
}
 }


export var fetch=async (req,res,next)=>{
    var condition_object=url.parse(req.url,true).query;
    var bookList = await BookSchemaModel.find(condition_object);
    var l=bookList.length;
    if(l!=0)
      return res.status(201).json(bookList);
    else
      return res.status(500).json({"result": "Server Error"});
  }

  export var deleteuser = async(req,res)=>
  {
    var condition_object=req.body;
    var user = await BookSchemaModel.find(condition_object);
    if(user.length!=0){
        let result =await BookSchemaModel.deleteOne(condition_object);
        if(result)
        return res.status(201).json({"msg":"success"});
    else 
    return res.status(500).json({error:"server error"});
    }
    else
    return res.status(404).json({error : "Resource not found"});
  }

  export var updateuser = async(req,res)=>{
    let bookDetails = await BookSchemaModel.findOne((req.body.condition_obj));
    if(bookDetails){
       let user=await BookSchemaModel.updateOne((req.body.condition_obj),{$set: (req.body.content_obj)});   
       if(user)
        return res.status(201).json({"msg":"success"});
       else
        return res.status(500).json({error: "Server Error"});
    }
    else
     return res.status(404).json({error: "Requested resource not available"});
  
  }
