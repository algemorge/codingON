import './style/Prac4.scss';

const Prac4 = () => {
   return (
      <div className="Prac4">
         <div>
            <img src={process.env.PUBLIC_URL + '/images/1.png'} alt="sample" />
         </div>
         <div>
            <img src={process.env.PUBLIC_URL + '/images/2.png'} alt="sample" />
         </div>
         <div>
            <img src={process.env.PUBLIC_URL + '/images/3.png'} alt="sample" />
         </div>
         <div>
            <img src={process.env.PUBLIC_URL + '/images/4.png'} alt="sample" />
         </div>
         <div>
            <img src={process.env.PUBLIC_URL + '/images/5.png'} alt="sample" />
         </div>
      </div>
   );
};

export default Prac4;