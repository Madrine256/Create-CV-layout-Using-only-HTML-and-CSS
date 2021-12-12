let myCvDetails = [
    {
        name : 'Nansiimbi Madrine',
        img : './images/mads01.jpg',
        make : 'contacts',
        address : "Bulwadda, k'la Uganda",
        phone: '256790800900',
        Email : 'madrinsx@gmail.com' ,
        Languages : 'English ,arabic ,luganda'  
    },
    {
        summary : 'Junior  web developer specializing in front end developemnt. Experinced with all stages of developement cycle for dynamic web projects. Currently learning Javsscript ',
        skills : 'Project manangemnet, strong decison making , complex probklem solver , creative design , inovative and service focused'
    },
    {
        experience : [
            {
                webDevelopement : '09/2021 to present',
                socialMedia : [
                    'Cooperate with designers to create clean interfaces abd simple , intutive interactions and experiences', 
                    'Develop project concepts and maintain optimal workflow.',
                    'work with different people online to manage large complex design projects',
                    'carry out quality assurance tests to discover errors and optimize usability'
            ]
        }
        ]
    },
    {
        education : 'Self taught , online videos and articles ',
        certificate : 'still studying'
    }
]
// /**
//  *! // get the classes of the div elememts form html
//  **/

 let myElements = (elementClass)=>{
     return document.querySelector(elementClass);
 }
 let rightBar  = myElements('.rightbar');
window.addEventListener('DOMContentLoaded', ()=>{
    console.log('hello world');
})