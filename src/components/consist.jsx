import con1 from "../img/con01.png";
import con2 from "../img/con2.png";
import con3 from "../img/con3.png";
import con4 from "../img/con4.png";

function Consist() {
  const arr = [
    {
      img: con1,
      mainText: "Коучинг по питанию",
      underMain:
        "Руководство к здоровому образу жизни через разнообразное питание.",
    },
    {
      img: con2,
      mainText: "Витамины и добавки",
      underMain:
        "Правильный подбор всех витаминов и нутриентов необходимых для организма.",
    },
    {
      img: con3,
      mainText: "Спортивные советы",
      underMain: "Полезные спортивные советы и упражнения для жиро-сжигания.",
    },
    {
      img: con4,
      mainText: "Похудение",
      underMain: "Идеальное похудение, обеспечивающее максимальный комфорт.",
    },
  ];
  return (
    <div className="w-full h-[280px] bg-customBg">
      <div className="w-5/6 mx-auto p-2">
        <ul className="flex w-full items-stretch justify-between mt-3">
          {arr.map((item, idx) => (
            <li
              key={idx}
              className="w-[22%] flex flex-col items-center justify-center rounded-lg p-4 text-center"
            >
              <div className="w-[80px] h-[80px] flex items-center justify-center rounded-full mb-3 bg-white">
                <img src={item.img} className="w-full" alt="" />
              </div>
              <h1 className="text-[20px] text-white font-semibold flex-1 flex items-center justify-center">
                {item.mainText}
              </h1>
              <p className="text-[#cccccc] flex-1 flex items-center justify-center">
                {item.underMain}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Consist;
