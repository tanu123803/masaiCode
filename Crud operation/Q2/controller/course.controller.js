 
const {getdata,addorUpdatedata} = require("../model/course.model")

const getAllcourses=(req,res)=>{
    let data=getdata().data
    let courses=getdata().courses
    res.json({ msg: "list of courses", data: courses })
};
const addcourse=(req,res)=>{
    let newCourse=req.body;
    console.log(newCourse)
      let { data, courses } = getdata();
    let id=courses[courses.length-1].id+1
    newCourse={...newCourse,id}
    courses.push(newCourse)

      console.log(id)
     addorUpdatedata(data)
     res.json({ msg: "Courses added successfully", course: newCourse }); 
}
const updatedata=(req, res) => {  
  let id = Number(req.params.id); 
  let updatedCourse = req.body;
    let data=getdata().data
    let courses=getdata().courses
    let index = courses.findIndex((course) => course.id === id); // ✅ use strict equality
    if (index === -1) {
        res.json({ msg: "id is not found" });
    } else {
        courses[index] = { ...courses[index], ...updatedCourse };
        addorUpdatedata(data)
        res.json({ msg: "course updated", course: courses[index] });
    }
};
const deletedata=(req, res) => {
    let id = Number(req.params.id);
   let data=getdata().data
   let courses=getdata().courses
    let index = courses.findIndex((course) => course.id === id);
    if (index === -1) {
        res.json({ msg: "id is not found" });
    } else {
        let updatedCourse=courses.filter((el,i)=>{
            return el.id!=id
        })
        data.courses = updatedCourse;
       addorUpdatedata(data)
        res.json({ msg: "course deleted", deletedCourse: courses[index] });
    }
};



 module.exports={getAllcourses,addcourse,updatedata,deletedata}