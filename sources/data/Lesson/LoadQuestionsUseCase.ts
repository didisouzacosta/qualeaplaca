import {
  QuestionTemplateB,
  QuestionTemplateA,
  QuestionTemplateC,
  QuestionTemplateType,
} from "../../domain/models/Question";

export default async (): Promise<QuestionTemplateType[]> => {
  const firstQuestion = new QuestionTemplateB({
    id: 1,
    text: "Qual é o nome correto da placa abaixo?",
    board:
      "https://isinaliza.vteximg.com.br/arquivos/ids/170019-512-512/3587-placa-lombada-a-18-aluminio-refletivo-acm-100x100cm-1.jpg?v=636800753432600000",
    answers: {
      first: { id: 1, label: "a", text: "A-3b" },
      second: { id: 2, label: "b", text: "A-4a" },
      third: { id: 3, label: "c", text: "A-5b" },
      fourth: { id: 4, label: "d", text: "A-3a", isRightAnswer: true },
    },
  });

  const secondQuestion = new QuestionTemplateA({
    id: 2,
    text:
      "Qual das infrações abaixo é considerada gravíssima com perda de 7 pontos na carteira?",
    board:
      "https://isinaliza.vteximg.com.br/arquivos/ids/170019-512-512/3587-placa-lombada-a-18-aluminio-refletivo-acm-100x100cm-1.jpg?v=636800753432600000",
    answers: {
      first: {
        id: 1,
        label: "a",
        text: "Não usar cinto de segurança.",
      },
      second: {
        id: 2,
        label: "b",
        text: "Cruzar com farol vermelho.",
      },
      third: {
        id: 3,
        label: "c",
        text: "Trafegar pela faixa exclusiva de ônibus.",
      },
      fourth: {
        id: 4,
        label: "d",
        text: "Dirigir com fones de ouvido ou aparelho celular.",
        isRightAnswer: true,
      },
    },
  });

  const thirthQuestion = new QuestionTemplateC({
    id: 3,
    text: "Qual é o nome correto da placa abaixo?",
    board:
      "https://isinaliza.vteximg.com.br/arquivos/ids/170019-512-512/3587-placa-lombada-a-18-aluminio-refletivo-acm-100x100cm-1.jpg?v=636800753432600000",
    answers: {
      first: { id: 1 },
      second: { id: 2 },
      third: { id: 3 },
      fourth: { id: 4, isRightAnswer: true },
    },
  });

  return [firstQuestion, secondQuestion, thirthQuestion];
};
