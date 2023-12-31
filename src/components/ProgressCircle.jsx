import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
// import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const angle = progress * 360;
  return (
    <Box
      sx={{
        background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
            ${colors.greenAccent[500]}`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default ProgressCircle;

// const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
//   const data01 = [
//     { name: 'Group A', value: 400 },
//     { name: 'Group B', value: 300 },
//     { name: 'Group C', value: 300 },
//     { name: 'Group D', value: 200 },
//     { name: 'Group E', value: 278 },
//     { name: 'Group F', value: 189 },
//   ];

//   return (
//     <box>
//       <ResponsiveContainer width="100%" height="100%">
//         <PieChart width={400} height={400}>
//           <Pie
//             dataKey="value"
//             isAnimationActive={false}
//             data={data01}
//             cx="50%"
//             cy="50%"
//             outerRadius={80}
//             fill="#8884d8"
//             label
//           />
//           {/* <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" /> */}
//           <Tooltip />
//         </PieChart>
//       </ResponsiveContainer>
//     </box>
//   );
// }

// export default ProgressCircle;


// export default class Example extends PureComponent {
//   static demoUrl = 'https://codesandbox.io/s/two-simple-pie-chart-otx9h';

//   render() {
//     return (
//       <ResponsiveContainer width="100%" height="100%">
//         <PieChart width={400} height={400}>
//           <Pie
//             dataKey="value"
//             isAnimationActive={false}
//             data={data01}
//             cx="50%"
//             cy="50%"
//             outerRadius={80}
//             fill="#8884d8"
//             label
//           />
//           <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
//           <Tooltip />
//         </PieChart>
//       </ResponsiveContainer>
//     );
//   }
// }
