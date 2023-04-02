import React, { useEffect } from 'react';
import MessageOfChairman from '../Shared/MessageOfChairman/MessageOfChairman';
import Navigation from '../Shared/Navigation/Navigation';
import './AboutUs.css'
import EmployeeList from './Employeelist';


const AboutUs = () => {
    
    return (
        <div>
           
            <h1 data-aos="fade-up
            ">Who We are</h1>
            <div className="container">
                <div className="row">
                {/* <p className="desc">Innoovative Technology International,imports, supply,install, r (servicing), rectify:<br></br>
                1) Digital weighing scales (bridge scales),<br></br>
                2) Scale related spare parts<br></br>
                3) Many kind of industrial  machinary items & spare parts<br></br>                       
Dear customers, we would like to introduce you with:<br></br>
Digital weighing scale such as :- <br></br>
A) Truck scale (Bridge scale)<br></br>
B) CRANE SCALES WITH REMOTE CONTROLLER
C) FLOOR SCALES<br></br>
D) BENCH SCALES (T – SCALES)<br></br>

 DIGITAL SCALES ARE ORIGINALLY MADE OF :- <br></br>
A) SPAIN (BRAND NAME SENSOCAR)<br></br>
B) TURKEY (BRAND NAME TUNAYLAR )<br></br>
C) CHINA (BRAND NAME YAOHUA/YUBO/SMILE<br></br>
NB: STOCK: – SCALE AND RELATED SPARE PARTS ALWAYS AVAILABLE
</p> */}

<p> Welcome to <b>Innovative Technology International</b>, your trusted partner in the digital weighing scale industry. Our company is dedicated to providing high-quality products and services to meet the demands of industrial sectors all over the world.<br></br>
<br></br>
At Innovative Technology International, we specialize in importing and distributing digital weighing scales, scale-related spare parts, and a wide variety of industrial machinery items and spare parts. We have extensive experience in the industry, with a proven track record of providing top-quality products at competitive prices.<br></br>
<br></br>
We are proud to source our products from trusted suppliers in <b>Spain</b> and <b>China</b>, who we have built strong relationships with over many years. Our team of experts is dedicated to ensuring that every product we sell meets the highest standards of quality, reliability, and performance.<br></br>
<br></br>
At Innovative Technology International, we understand that our customers demand the best, and we are committed to delivering nothing less. We believe that our success depends on our ability to provide exceptional customer service and support, and we take this responsibility very seriously.
<br></br>
<br></br>
Our team of experts is always on hand to provide advice, assistance, and troubleshooting to ensure that our customers get the most out of their equipment. We are constantly investing in research and development to ensure that our products remain at the cutting edge of technology, and we are always looking for ways to improve and enhance our offerings.<br></br>
<br></br>
At Innovative Technology International, we are committed to building long-term relationships with our customers based on trust, reliability, and exceptional service. Thank you for considering us as your partner in the digital weighing scale industry.</p>
                </div>
            </div>
            <br></br>

            <MessageOfChairman></MessageOfChairman>
            <div className='mt-5'>
                <h2>Our Employees</h2>
                <EmployeeList></EmployeeList>
            </div>
        </div>
    );
};

export default AboutUs;