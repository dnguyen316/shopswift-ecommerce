import { lazy } from "react";

export const PhoneIcon = lazy(() => import("./categories/phone"));
export const ComputerIcon = lazy(() => import("./categories/computer"));
export const CameraIcon = lazy(() => import("./categories/camera"));
export const SmartWatchIcon = lazy(() => import("./categories/watch"));
export const HeadphoneIcon = lazy(() => import("./categories/headphone"));
export const GamepadIcon = lazy(() => import("./categories/gamepad"));

export const CategoriesIconList = {
  phone: <PhoneIcon />,
  computer: <ComputerIcon />,
  camera: <CameraIcon />,
  smartwatch: <SmartWatchIcon />,
  headphone: <HeadphoneIcon />,
  gamepad: <GamepadIcon />,
};
