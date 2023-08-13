const items= [
    {
        id: 1,
        img: '../images/html.jpg',
        text: 'Proficient in a diverse range of technologies, we thrive on both sides of the development spectrum. On the frontend, creating captivating user experiences using the power of React, HTML, CSS, and JavaScript. Our knack for responsive design ensures seamless interactions across devices, catering to modern user expectations.\n  When it comes to the backend, we\'re no strangers to the intricate workings of Spring Boot, Flask and Nodejs. We specialize in architecting data-driven applications that seamlessly integrate APIs, ensuring smooth data exchange and enhanced functionality. Our dedication to clean code and agile methodologies ensures rapid development cycles without compromising on quality.'
    },
    {
        id:2 ,
        img:'../images/networking.jpg',
        text :'With a deep understanding of computer networking principles, I thrive on designing and implementing robust network architectures that facilitate seamless data exchange. From local area networks (LANs) to complex wide area networks (WANs), we have a proven track record of creating networks that keep businesses connected.\n With Hardware, we are not just another technician. From diagnosing intricate issues to conducting intricate repairs, maintenance, and upgrading. Our expertise spans across desktops, laptops, servers, and other hardware components.'
    },
    {
        id:3 ,
        img:'../images/media.jpg',
        text :' The digital landscape is our playground, and we excel in distributing content across various platforms. From streaming services to social media, we ensure your content reaches the widest possible audience.\nThrough interactive elements, real-time engagement, and data-driven insights, we create an immersive experience that keeps viewers coming back for more.'
    },
    {
        id:4 ,
        img:'',
        text :''
    }
]

const icons = document.getElementsByClassName('fa-bars');
const banner = document.querySelector('.banner');
[...icons].map((e,i)=>{
   e.addEventListener('click', ()=>{
    console.log(items[i])
    const skills =document.querySelector('.skills');
   
    skills.innerHTML= `
        <img src=${items[i].img}>
        <p>${items[i].text}</p>
                        `
   
   banner.style.display = 'flex'
   })
   banner.addEventListener('click', ()=>{
    banner.style.display='none'
   })
})

