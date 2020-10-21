import {
  useNavigation as ReactUseNavigation,
  CompositeNavigationProp,
} from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { MainStackParams, LessonStackParams } from "../../navigation";

export const useNavigation = () => {
  type MainNavigationProp = StackNavigationProp<MainStackParams>;
  type LessonNavigationProp = StackNavigationProp<LessonStackParams>;

  type NavigationProp = CompositeNavigationProp<
    LessonNavigationProp,
    MainNavigationProp
  >;

  return ReactUseNavigation<NavigationProp>();
};
