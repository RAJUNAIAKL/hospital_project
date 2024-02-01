 import "./blog.component.css";
 import background from "../../Assets/background.jpg";
 import {Menucomponent} from "../menucomponent/menu.component";
 import {FooterComponent} from "../../featurecomponent/footercomponent/footer.component";

export function Blogcomponent() {
    const spacing = 10;
    return (

        <div>
            <Menucomponent></Menucomponent>
           {/*--------banner title---------- */}
           <section className='blog-banner'>
                <img src={background} style={{height:"60vh", width:"100%"}}></img>
                    <div className='blog-banner'>
                        <h4>BLOG</h4>
                        <li ><a href="/homecomponent" style={{color:"white"}}>Home</a>&nbsp;/&nbsp;<span>Blog</span></li>
                    </div>
            </section>
            <br></br> <br></br> <br></br> 

            <section>
                <div className="row">
                    <div className="col-lg-3-blog">
                        <h4>Why employer healthcare strategies must be local one</h4>
                        <p>The best employers care not only about their employees’ productivity, 
                          but their well-being. And if you’re heading up a large company that employs ...
                        </p>
                    </div>
                    <div className="col-lg-3-blog">
                        <h4>Why employer healthcare strategies must be local one</h4>
                        <p>The best employers care not only about their employees’ productivity, 
                          but their well-being. And if you’re heading up a large company that employs ...
                        </p>
                    </div>
                    <div className="col-lg-3-blog">
                        <h4>Why employer healthcare strategies must be local one</h4>
                        <p>The best employers care not only about their employees’ productivity, 
                          but their well-being. And if you’re heading up a large company that employs ...
                        </p>
                    </div>
                </div>
            </section>
            <br></br> <br></br>
            <FooterComponent></FooterComponent>
        </div>
    )
}