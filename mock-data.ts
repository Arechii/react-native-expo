import { CardProps } from "./components/Card/types";
import { colors } from "./components/colors";
import { SendMoneyProps } from "./components/SendMoney/types";
import { TransactionProps } from "./components/Transaction/types";
import logo1 from "./assets/cards/mc.png";
import logo2 from "./assets/cards/visa_white.png";
import portrait1 from "./assets/portraits/1.jpg";
import portrait2 from "./assets/portraits/2.jpg";
import portrait3 from "./assets/portraits/3.jpg";

export const CARDS: CardProps[] = [
  {
    id: 1,
    accountNr: "3845757744",
    balance: 20000.15,
    alias: "Work Debit",
    logo: logo1
  },
  {
    id: 2,
    accountNr: "3845757203",
    balance: 12000.01,
    alias: "Personal Prepaid",
    logo: logo2
  },
  {
    id: 3,
    accountNr: "3845757847",
    balance: 5600.83,
    alias: "School Prepaid",
    logo: logo1
  }
];

export const TRANSACTIONS: TransactionProps[] = [
  {
    id: 1,
    amount: 86.0,
    date: "14 Sep 2021",
    title: "Taxi",
    subtitle: "Uber car",
    art: {
      background: colors.primary,
      icon: "car"
    }
  },
  {
    id: 2,
    amount: 286.0,
    date: "14 Sep 2021",
    title: "Shopping",
    subtitle: "Amazon",
    art: {
      background: colors.tertiary,
      icon: "cart"
    }
  },
  {
    id: 3,
    amount: 586.0,
    date: "14 Aug 2021",
    title: "Travel",
    subtitle: "Emirates",
    art: {
      background: colors.accent,
      icon: "airplane"
    }
  }
];

export const SEND_MONEY_DATA: SendMoneyProps[] = [
  {
    id: 1,
    amount: 2450.56,
    name: "Coby Andoh",
    background: colors.tertiary,
    img: portrait1
  },
  {
    id: 2,
    amount: 4450.56,
    name: "Harleen Scot",
    background: colors.primary,
    img: portrait2
  },
  {
    id: 3,
    amount: 63250.56,
    name: "James Corbyn",
    background: colors.accent,
    img: portrait3
  }
];
