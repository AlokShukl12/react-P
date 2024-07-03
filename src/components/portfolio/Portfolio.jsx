import "./portfolio.scss";
import { motion,useScroll,useSpring, useTransform} from "framer-motion";
import { useRef} from "react";

const items = [
    {
        id:1,
        title:"React Commerce",
        img:"https://images.pexels.com/photos/20507813/pexels-photo-20507813/free-photo-of-bald-eagle-on-tree.jpeg?auto=compress&cs=tinysrgb&w=600",
       desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, nihil deleniti nobis voluptatibus dignissimos distinctio corporis, doloribus impedit suscipit eos ipsam dolorum. Quam repellat dolore possimus dolorum placeat eaque mollitia!"
    },
    {
        id:2,
        title:"Next.js Blog",
        img:"https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=600",
       desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, nihil deleniti nobis voluptatibus dignissimos distinctio corporis, doloribus impedit suscipit eos ipsam dolorum. Quam repellat dolore possimus dolorum placeat eaque mollitia!"
    },{
        id:3,
        title:"Vanilla JS App",
        img:"https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600",
       desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, nihil deleniti nobis voluptatibus dignissimos distinctio corporis, doloribus impedit suscipit eos ipsam dolorum. Quam repellat dolore possimus dolorum placeat eaque mollitia!"
    },{
        id:4,
        title:"Music App",
        img:"https://images.pexels.com/photos/24964094/pexels-photo-24964094/free-photo-of-sun-setting-over-water-with-a-tree.jpeg?auto=compress&cs=tinysrgb&w=600",
       desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, nihil deleniti nobis voluptatibus dignissimos distinctio corporis, doloribus impedit suscipit eos ipsam dolorum. Quam repellat dolore possimus dolorum placeat eaque mollitia!"
    },
];

const Single = ({item}) => {
    const ref = useRef();

    const { scrollYProgress} = useScroll({target:ref,
        // offset:["start start","end start"]

    });

    const y = useTransform(scrollYProgress,[0,1],[-300,300]);

    return(<section >
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer" ref={ref}>
                    <img src={item.img} alt=""/>
                </div>
           
            <motion.div className="textContainer"style={{y}} >
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <button>See Demo</button>
            </motion.div>
            </div>
        </div>
         </section>
    );
};

const Portfolio = () =>{
    const ref = useRef();

    const { scrollYProgress} = useScroll({target:ref,offset:["end end", "start start"]});

    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,

    });
    return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{scaleX}
        } className="progressBar"></motion.div>
        </div>
        {items.map((item)=>(
            <Single item={item} key={item.id}/>
        ))}
       </div>
    );
};
export default Portfolio;