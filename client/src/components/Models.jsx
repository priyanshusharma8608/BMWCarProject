import { Link } from "react-router-dom";
function Models() {
  let carData = [
    { id: '101', img: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/iX1/9127/1695967266489/front-left-side-47.jpg?tr=w-664', title: "THE FIRST FULLY-ELECTRIC BMW iX1", price: '66,900,000', function: "Electric Car", type: 'BMWi' },
    { id: '102', img: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20240321122621_BMW_iX_xDrive50_front.jpg&w=700&c=1', title: "THE NEW BMW iX xDRIVE50", price: '13,950,000', function: "Full-Electric", type: 'BMWi' },
    { id: '103', img: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/109123/i4-exterior-left-front-three-quarter.jpeg?isig=0&q=80', title: "THE FULLY ELECTRIC BMW i4", price: '72,50,000', function: "Full-Electric", type: 'BMWi' },
    { id: '104', img: 'https://vehicle-images.dealerinspire.com/8156-110005802/WBY43EJ07RCP83400/d0e3f65540564e51d71a6d1145c13888.jpg', title: "THE FULLY ELECTRIC BMW i7", price: '2,03,50,000', function: "Full-Electric", type: 'BMWi' },
    { id: '105', img: 'https://vehicle-images.dealerinspire.com/23fb-18003204/WBY43EJ03RCN99359/efe84920eda79b731ba984f42b483182.jpg ', title: "THE FIRST-EVER BMW i7 M70 xDRIVE", price: '2,50,00,000', function: "Full-Electric", type: 'BMWi' },
    { id: '106', img: 'https://vehicle-images.dealerinspire.com/e3b9-18003204/WBY33FK03RCR93976/846c353ceb0fcb8d9c272fc54c87adfe.jpg', title: "THE FIRST-EVER BMW i5 M60 xDRIVE", price: '1,19,50,000', function: "Full-Electric", type: 'BMWi' },
    { id: '107', img: 'https://www.bmw.in/content/dam/bmw/marketIN/bmw_in/all-models/x-series/x1/2023/bmw-x1-offers.png', title: "THE BMW X1", price: '49,90,000', function: "Petrol + Diesel", type: 'X' },
    { id: '108', img: 'https://images.dealer.com/ddc/vehicles/2024/BMW/X3/SUV/still/front-left/front-left-640-en_US.jpg', title: "THE BMW X3", price: '72,50,000', function: "Diesel", type: 'X' },
    { id: '109', img: 'https://www.bmwjamaica.com/content/dam/bmw/common/all-models/x-series/x5/2019/models-and-equipment/bmw-x5-models-equipment-lines-03-01.jpg.asset.1612446998246.jpg', title: "THE BMW X5", price: '97,00,000', function: "Petrol + Diesel", type: 'X' },
    { id: '110', img: 'https://upload.wikimedia.org/wikipedia/commons/0/00/BMW_G07_1X7A1696.jpg', title: "THE BMW X7", price: ' 1,30,00,000', function: "Petrol + Diesel", type: 'X' },
    { id: '111', img: 'https://hips.hearstapps.com/hmg-prod/images/bmw-m2-zandvoort-blue-046-6426fb231b11c.jpg', title: "THE ALL-NEW BMW M2 COUPÉ", price: ' 99,90,000', function: "Petrol", type: 'M' },
    { id: '112', img: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/135697/2022-m340i-xdrive-exterior-right-front-three-quarter.jpeg?isig=0&q=80', title: "THE BMW M340i", price: '  72,90,000', function: "Petrol", type: 'M' },
    { id: '113', img: 'https://i.ytimg.com/vi/WXYqKKhHTNE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBkOvIe5VspbtWeEV8-kahSNhq1dw', title: "THE NEW BMW Z4 M40i", price: '90,90,000', function: "Petrol", type: 'M' },
    { id: '114', img: 'https://media.cgtrader.com/variants/LthqRfLh8VBhe5BEXrViL1TJ/64d1262c1acde2eb3beef249c4695a8ad88c958dd79db36f763bf631017addd0/M8%206.png', title: "THE BMW M8 COMPETITION COUPÉ", price: '2,44,00,000', function: "Petrol", type: 'M' },
    { id: '115', img: 'https://media.licdn.com/dms/image/v2/D4D12AQFxbPULPWUj-g/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1697794204111?e=1730937600&v=beta&t=pAFmmPgpg1RA66cbvU-x24MLBeFZXdSzCugqG9Zz8kY', title: "THE FIRST-EVER BMW i7 M70 xDRIVE", price: '2,50,00,000', function: "Hybrid", type: 'M' },
    { id: '116', img: 'https://i.namu.wiki/i/CD3FgCHQFflojYsgZS308zDwjwhqChKCJuSw3Tr048L0OMcAmKlGoWe4Q13UE0zOoCvnHYrTiWDs_xcIbHhdmA.webp', title: "THE BMW XM", price: '2,60,00,000', function: "Plug-in Hybrid", type: 'M' },
    { id: '117', img: 'https://cdn.myshoptet.com/usr/www.autoibuy.com/user/documents/upload/Roman%202024/BMW/M4/M4%20performance/1.png', title: "THE BMW M4 COMPETITION xDRIVE", price: '1,53,00,000', function: "Petrol", type: 'M' },
  ];

  return (
    <div className="bg-gray-500 h-full"><br/><br/>
      <h1 className='text-6xl font-thin px-9 py-9 text-white font-semibold  '>
        FIND YOUR BMW
      </h1>
      <ul className='flex items-center gap-7 px-20 text-white underline-offset-4'>
        <li className='hover:underline cursor-pointer'>BMW i</li>
        <li className='hover:underline cursor-pointer'>X</li>
        <li className='hover:underline cursor-pointer'>M</li>
        <li className='hover:underline cursor-pointer'>7</li>
        <li className='hover:underline cursor-pointer'>5</li>
        <li className='hover:underline cursor-pointer'>3</li>
        <li className='hover:underline cursor-pointer '>2</li>
        <li className='hover:underline cursor-pointer'>Z4</li>
      </ul>
      <h1 className="px-10 py-4 text-3xl font-thin text-white mt-2">BMW i</h1>

      <div className="flex flex-wrap  justify-evenly gap-2">
        {carData.map((value, index) => (
          value.type === 'BMWi' && (
            <div key={index} className="border-2 w-[300px] h-[300px] mt-3 rounded-xl">
              <Link to={`/ShowCar/${value.id}`}>
                <img className="rounded-t-xl h-[190px] w-[300px] p-2 hover:scale-105 duration-300" src={value.img} alt="car" /><br />
              </Link>
              <div className="flex flex-col items-center">
                <h1 className="flex justify-between items-center ml-1 text-white font-sans">{value.title}</h1>
                <h1 className="font-sans text-white ml-2">Price: {value.price}</h1>
                <h1 className="mt-2 text-white ml-4">{value.function}</h1>
              </div>
            </div>
          )
        ))}
      </div>

      <div>
        <h1 className="px-10 py-4 text-3xl font-thin mt-2 text-white font-semibold">X</h1>

        <div className="flex flex-wrap justify-evenly mx-2 gap-2">
          {carData.map((value, index) => (
            value.type === 'X' && (
              <div key={index} className="border-2 w-[300px] h-[300px] mt-3 rounded-xl">
                <Link to={`/ShowCar/${value.id}`}>
                  <img className=" rounded-t-xl h-[190px] w-[300px] p-2  hover:scale-105 duration-300" src={value.img} alt="car" /><br />
                </Link>
                <div className="flex flex-col items-center">
                  <h1 className="flex justify-between items-center ml-1 text-white font-sans">{value.title}</h1>
                  <h1 className="font-sans text-white ml-2">Price: {value.price}</h1>
                  <h1 className="mt-2 text-white ml-4">{value.function}</h1>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
      <div>
        <h1 className="px-10 py-4 text-3xl font-thin mt-2 text-white font-semibold">M</h1>

        <div className="flex flex-wrap justify-evenly mx-2 gap-2">
          {carData.map((value, index) => (
            value.type === 'M' && (
              <div key={index} className="border-2 w-[300px] h-[300px] mt-3 rounded-xl">
                <Link to={`/ShowCar/${value.id}`}>
                  <img className="rounded-t-xl h-[190px] w-[300px] p-2 hover:scale-105 duration-300" src={value.img} alt="car" /><br />
                </Link>
                <div className="flex flex-col items-center">
                  <h1 className="flex justify-between items-center ml-1 text-white font-sans">{value.title}</h1>
                  <h1 className="font-sans text-white ml-2">Price: {value.price}</h1>
                  <h1 className="mt-2  text-white ml-4">{value.function}</h1>
                </div>
              </div>
            )
          ))}
        </div>

      </div>
    </div>
  );
}

export default Models;
