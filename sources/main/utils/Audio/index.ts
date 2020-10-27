import { Audio } from "expo-av";

const sounds = {
  correctAnswer: require("./../../assets/audio/lesson/correct_answer_effect.mp3"),
  incorrectAnswer: require("./../../assets/audio/lesson/incorrect_answer_effect.mp3"),
  buttonClick: require("./../../assets/audio/lesson/button_click_effect.mp3"),
};

type Props = {
  path: any;
  volume?: number;
};

export const playSound = async ({ path, volume = 1 }: Props) => {
  const sound = new Audio.Sound();
  await sound.loadAsync(path);
  await sound.setVolumeAsync(volume);
  await sound.playAsync();
};

export const playCorrectlyAnswerSound = async () => {
  await playSound({ path: sounds.correctAnswer, volume: 0.03 });
};

export const playIncorrectlyAnswerSound = async () => {
  await playSound({ path: sounds.incorrectAnswer, volume: 0.1 });
};

export const playButtonClickSound = async () => {
  await playSound({ path: sounds.buttonClick, volume: 0.03 });
};
