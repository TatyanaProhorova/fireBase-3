import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function TestPage() {

  return (



  <span>На этой странице должен быть ТЕСТ</span>
  );
}
// export const TestPage = () => {
//   const [testData, setTestData] = useState<TestType | null>(null);

//   const [isLoading, setIsLoading] = useState(false);

//   // const { testCode } = useParams();

//   useEffect(() => {
//     // if (themeCode) {
//     //   setIsLoading(true);
//       postTest(themeCode)
//         .then((result) => {
//           setThemeData(result);
//         })
//         .finally(() => {
//           setIsLoading(false);
//         });
//     // }
//   }, []);

//   if (isLoading) {
//     return <div>Загрузка</div>;
//   }
//   if (!testData) {
//     return <div>Данные о теме отсутствуют</div>;
//   }
//   const { name, code } = themeData;

//   return (
//     <>
//       <div>
//         <span className="studentName&Form">
//           {timestamp} {theme}  {taskAmount}
//         </span>
//       </div>
//     </>
//   );
// };
