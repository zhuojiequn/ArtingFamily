import React,{Component} from 'react';
import Header from './header';
import Footer from './footer';
import './introduce.scss'

export default class Introduce extends Component{
    render(){
        var introduce_ban={background:"url('src/public/images/banner2.png') center",height:"510px"}
        var font_tao={color:"#816c56",top:"130px"}
        var font_yin={color:"#797676",fontSize:"14px",top:"200px"}
        var font_yi={color:"#fff",top:"240px"}
        var introduce_span={background:"url('src/public/images/xuanzhuan.png') center"}
        var taoni_bg={backgroundColor:"#fff"}
        var introduce_dian={background:"url('src/public/images/dian1.png') center no-repeat"}
        var teach_img={margin:"24px 50px 0"}
        var student_img1={width:"450px",height:"300px",marginTop:"-240px"}
        var student_img2={width:"450px",height:"300px",marginTop:"-200px"}
        var student_img3={width:"450px",height:"500px",marginTop:"70px",marginLeft:"30px"}
        var jiantou_img={position:"absolute",background:"url('src/public/images/jiantou2.png') center no-repeat",width:"15px",height:"32px",bottom:"0",right:"-40px"}
        return(
            <div className="Introduce">
               <div className="introduce_header" style={introduce_ban}>
                   <Header />
                   <p style={font_tao}>陶</p>
                   <p style={font_yin}>taoyi</p>
                   <p style={font_yi}>艺</p>
               </div>
               <div className="taoni container">
                   <h2>陶泥简介</h2>
                    <div>
                   <p>陶瓷艺术简称为陶艺，古老的陶瓷艺术发源于东方的中国，并有着千年的历史。
                       陶瓷艺术作为一种文化象征而传播到世界各地。然而，随着社会的进步，
                       标志着古老文明的陶瓷传统制作技艺及艺术成果不断地被现代工业文明所冲击和取代。
                    </p>
                    <p>
                    由此，人类正迫切需要回归自然地情感和欲求，随着工业社会带来的失落感而日益强烈，现代陶瓷艺术应运而生。
                     陶泥是一种制作陶器用的粘土，指含有铁质而带黄褐色。灰白色。红紫色等色调。具有良好可塑性的粘土矿物成分以蒙脱石。
                     高岭土为主。陶士主要用作烧制外墙，地砖。陶器具等。
                    </p>
                    </div>
               </div>
               <div className="teach_order container">
                    <div className="order1">教程顺序</div>
                    <ul>
                        <li>选泥<span style={introduce_span}></span></li>
                        <li>造型<span style={introduce_span}></span></li>
                        <li>雕刻<span style={introduce_span}></span></li>
                        <li>烘干<span style={introduce_span}></span></li>
                        <li>上油<span style={introduce_span}></span></li>
                    </ul>
                    <div className="order2">大师指导</div>
               </div>
               <div className="container handfa_img">
                   <img src="src/public/images/shoufa.png" />
               </div>
               <div className="container taoni" style={taoni_bg}>
                   <h2>陶泥手法</h2>
                   <div>
                   <p>揉泥是人们做陶前的热身准备活动，是寻找泥感的一种基本的方式，
                       是陶艺学习者必须掌握的一门技术。其目的是使未经真空练过的泥变得更密实，
                       要做到切开后里面没有气泡。经真空练过的泥其结构发生变化，具有柔韧性和可塑性。
                         一件优秀陶艺作品的产生，离不开创作者自己独特的表现技法与装饰手段。
                         陶艺的成型手法和装饰手段是陶艺初学者必然要遇到和解诀的实际问题，掌握陶艺创作基本技法，
                         要经过一定的专业训练，它是一个从掌握一-般基本技能到具备一定技巧的过程。
                   </p>
                   </div>
               </div>
               <div className="container work_img">
                   <img src="src/public/images/work.png" />
               </div>
               <div className="container love_tao">
                  <div>
                   <h2>让孩子从此热爱陶艺<span style={introduce_dian}></span></h2>
                   <p>陶瓷是陶器和瓷器的总称。陶瓷是一种工艺美术，
                       也是民俗文化中国是世界上几个历史悠久的文明古国之一，
                       对人类社会的进少与发展做出了许多重大贡献。在陶瓷技术与艺术上所取得的成就尤其具有特殊重要意义。                    
                       在中国，制陶技艺的产生可追溯到纪元前4500年至前2500年的时代，
                    可以说是中华民族发展史中的一个重要组成部分是陶器发展史。
                    中国人在科学技术上的成果以及对美的追求与塑造，在许多方面都是通过陶瓷制作来体现的
                    ，井形成各时代丰常典型的技术与艺术特征。
                    </p>
                  </div>
                  <div> <img src="src/public/images/shou.png" /></div>
               </div>
               <div className="student_product container">
                  <div>
                   <h2>老师作品</h2>
                   <p>在此任职的数位老师多年从事陶艺教育工作，
                       都拥有丰富的教学经验，技术纯熟，可以很好的解决学员的各种问题，
                       并帮助学员进一步地提升技术水平，多数老师曾获得过陶艺大奖并得以收藏
                       <span style={jiantou_img}></span>
                   </p>
                 </div>
                   <img src="src/public/images/jincao1.png" />
                   <img src="src/public/images/jincao2.png" style={teach_img} />
                   <img src="src/public/images/jincao3.png" />
               </div>
               <div className="teach_product container">
                  <div>
                   <h2>学生作品</h2>
                   <p>十年来培养养了一大批优秀学员，制作出数以万计的参展作品，
                       曾获得过各项大奖，陶冶学生们的情操，并在性格上帮助学生积极健康成长。
                       <span style={jiantou_img}></span>
                   </p>
                 </div>
                 <div className="student_img">
                   <img src="src/public/images/jincao4.png" style={student_img1} />
                   <img src="src/public/images/jincao6.png" style={student_img3} />
                   <img src="src/public/images/jincao5.png" style={student_img2} />
                </div>
               </div>
                <div>
                    <Footer />
                </div>
            </div>
        )
    }
}