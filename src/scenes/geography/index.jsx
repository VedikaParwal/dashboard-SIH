import { Box, useTheme } from "@mui/material";
import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    // <Box m="20px">
    //   <Header title="Geography" subtitle="Simple Geography Chart" />

    //   <Box
    //     height="75vh"
    //     border={`1px solid ${colors.grey[100]}`}
    //     borderRadius="4px"
    //   >
    //     <GeographyChart />
    //   </Box>
    // </Box>

    <>
      <div className="flex justify-center items-center space-x-4">
        <div className="flex flex-col items-center">
          <CheckCircleIcon className="text-green-500 w-8 h-8" />
          <span className="text-sm mt-2">Step name 1</span>
        </div>
        <div className="w-8 border-t border-gray-300" />
        <div className="flex flex-col items-center">
          <CheckCircleIcon className="text-green-500 w-8 h-8" />
          <span className="text-sm mt-2">Step name 2</span>
        </div>
        <div className="w-8 border-t border-gray-300" />
        <div className="flex flex-col items-center">
          <SettingsIcon className="text-blue-500 w-8 h-8" />
          <span className="text-sm mt-2">Step name 3</span>
        </div>
      </div>
      <div className="flex justify-center items-center space-x-4 mt-8">
        <div className="flex flex-col items-center">
          <CheckCircleIcon className="text-green-500 w-8 h-8" />
          <span className="text-sm mt-2">Step one</span>
        </div>
        <div className="w-8 border-t border-gray-300" />
        <div className="flex flex-col items-center">
          <CheckCircleIcon className="text-green-500 w-8 h-8" />
          <span className="text-sm mt-2">Step two</span>
        </div>
        <div className="w-8 border-t border-gray-300" />
        <div className="flex flex-col items-center">
          <SettingsIcon className="text-blue-500 w-8 h-8" />
          <span className="text-sm mt-2">Step three</span>
        </div>
        <div className="w-8 border-t border-gray-300" />
        <div className="flex flex-col items-center">
          <CircleIcon className="text-gray-300 w-8 h-8" />
          <span className="text-sm mt-2">Step four</span>
        </div>
      </div>
      <div className="flex justify-center items-center space-x-4 mt-8">
        <div className="flex flex-col items-center">
          <CheckCircleIcon className="text-green-500 w-8 h-8" />
          <span className="text-sm mt-2">Step name 1</span>
        </div>
        <div className="w-8 border-t border-gray-300" />
        <div className="flex flex-col items-center">
          <CheckCircleIcon className="text-green-500 w-8 h-8" />
          <span className="text-sm mt-2">Step name 2</span>
        </div>
        <div className="w-8 border-t border-gray-300" />
        <div className="flex flex-col items-center">
          <SettingsIcon className="text-blue-500 w-8 h-8" />
          <span className="text-sm mt-2">This step has a very very text</span>
        </div>
        <div className="w-8 border-t border-gray-300" />
        <div className="flex flex-col items-center">
          <CircleIcon className="text-gray-300 w-8 h-8" />
          <span className="text-sm mt-2">Step name 4</span>
        </div>
        <div className="w-8 border-t border-gray-300" />
        <div className="flex flex-col items-center">
          <CircleIcon className="text-gray-300 w-8 h-8" />
          <span className="text-sm mt-2">Step name 5</span>
        </div>
      </div>
    </>
  )
}

function CheckCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}


function CircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  )
}


function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
};

export default Geography;
