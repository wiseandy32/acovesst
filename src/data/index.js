import chooseUsImage1 from "@/assets/choose-us-image-1.png";
import chooseUsImage2 from "@/assets/choose-us-image-2.png";
import chooseUsImage3 from "@/assets/choose-us-image-3.png";
import chooseUsImage4 from "@/assets/choose-us-image-4.jpg";
import chooseUsImage5 from "@/assets/choose-us-image-5.webp";
import chooseUsImage6 from "@/assets/choose-us-image-6.jfif";
import btcIcon from "@/assets/btc-logo.png";
import ethIcon from "@/assets/eth-logo.png";
import usdtIcon from "@/assets/usdt-logo.png";
import xlmIcon from "@/assets/xlm-logo.png";
import xrpIcon from "@/assets/xrp-logo.png";
import dogeIcon from "@/assets/doge-logo.png";
import ltcIcon from "@/assets/ltc-logo.png";
import algoIcon from "@/assets/algo-logo.png";
import solIcon from "@/assets/sol-logo.png";
import bnbIcon from "@/assets/bnb-logo.png";
import qtumIcon from "@/assets/qtum-logo.png";
import tezosIcon from "@/assets/tezos-logo.png";
import thetaIcon from "@/assets/theta-logo.png";
import fileCoinIcon from "@/assets/filecoin-logo.png";
import nanoIcon from "@/assets/nano-logo.png";
import shibaIcon from "@/assets/shiba-logo.png";
// import stellarIcon from "@/assets/stellar-logo.jfif";
// import rippleIcon from "@/assets/ripple-logo.png";
// import tetherIcon from "@/assets/tether-logo.png";
// import tronIcon from "@/assets/tron-logo.png";
import bitcoinQRCode from "@/assets/bitcoin-qr.jpg";
import ethQRCode from "@/assets/eth-qr.jpg";
import xrpQRCode from "@/assets/xrp-qr.jpg";
import xlmQRCode from "@/assets/xlm-qr.jpg";
import usdtQRCode from "@/assets/usdt-trc20-qr.jpg";
import dogeQRCode from "@/assets/doge-qr.jpg";
import algoQRCode from "@/assets/algo-qr.jpg";
import solQRCode from "@/assets/sol-qr.jpg";
import ltcQRCode from "@/assets/ltc-qr.jpg";
import bnbQRCode from "@/assets/bnb-qr.jpg";
import qtumQRCode from "@/assets/qtum-qr.jpg";
import xtzQRCode from "@/assets/xtz-qr.jpg";
import thetaQRCode from "@/assets/theta-qr.jpg";
import filQrCode from "@/assets/fil-qr.jpg";
import xnoQRCode from "@/assets/xno-qr.jpg";
import { DollarSign } from "lucide-react";
import { PiHandWithdrawBold, PiVaultFill } from "react-icons/pi";
import { GiProfit } from "react-icons/gi";
import { MdAccountBalanceWallet } from "react-icons/md";

export const registrationFormField = [
  {
    name: "firstName",
    label: "First name",
    placeholder: "Enter your first name",
    type: "text",
    min: 2,
  },
  {
    name: "lastName",
    label: "Last name",
    placeholder: "Enter your last name",
    type: "text",
    min: 2,
  },
  {
    name: "email",
    label: "Email address",
    placeholder: "sample@gmail.com",
    type: "email",
    // pattern: "[a-zA-Z0-9._%+-]+@[a-zA-z0-9.-]+\\.[a-zA-Z]{2,}$",
    title: "Please enter a valid email address (e.g., user@example.com)",
  },
  {
    name: "username",
    label: "username",
    placeholder: "Enter a unique username",
    type: "text",
    min: 4,
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter a password",
    type: "password",
    // pattern:
    //   "(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}",
    // title:
    //   "Password must contain at least 8 characters, with at least one uppercase letter, one lowercase letter, one number, and one special character",
    title: "Password must contain at least 4 characters",
    min: 6,
  },
  {
    name: "confirmPassword",
    label: "confirm your password",
    placeholder: "Confirm your password",
    type: "password",
    min: 6,
  },
];

export const loginFormFields = [
  {
    name: "email",
    label: "email",
    placeholder: "Enter your email address",
    type: "email",
  },
  {
    name: "password",
    label: "password",
    placeholder: "Enter your password",
    type: "password",
  },
];

export const chooseUsCardInfo = [
  {
    title: "Safe & Secure",
    subtext:
      "This platform is built and maintained with maximum security in order to retain the ability to keep the trust of it's users.",
    start: 1,
    icon: PiVaultFill,
  },
  {
    title: "Profitable Assets",
    subtext:
      "All assets enlisted on this platform have been tested and found to be really profitable to make any sort of investment on.",
    icon: GiProfit,
  },
  {
    title: "Instant Withdrawals",
    subtext:
      "Choose the amount to withdraw and receive it instantly, to your preferred crypto wallet in your account, instantly.",
    icon: PiHandWithdrawBold,
  },
];

export const wallets = [
  { name: "Ledger", icon: DollarSign, balance: 0.0, value: "ledger_balance" },
  { name: "BTC", icon: btcIcon, balance: 0.0, value: "BTC_balance" },
  { name: "ETH", icon: ethIcon, balance: 0.0, value: "ETH_balance" },
  { name: "USDT", icon: usdtIcon, balance: 0.0, value: "USDT_balance" },
  { name: "XLM", icon: xlmIcon, balance: 0.0, value: "XLM_balance" },
  { name: "XRP", icon: xrpIcon, balance: 0.0, value: "XRP_balance" },
  { name: "DOGE", icon: dogeIcon, balance: 0.0, value: "DOGE_balance" },
  { name: "LTC", icon: ltcIcon, balance: 0.0 },
  { name: "ALGO", icon: algoIcon, balance: 0.0, value: "ALGO_balance" },
  { name: "SOL", icon: solIcon, balance: 0.0, value: "SOL_balance" },
  { name: "BNB", icon: bnbIcon, balance: 0.0 },
  { name: "QTUM", icon: qtumIcon, balance: 0.0 },
  { name: "TEZOS", icon: tezosIcon, balance: 0.0 },
  { name: "THETA", icon: thetaIcon, balance: 0.0 },
  { name: "FILECoin", icon: fileCoinIcon, balance: 0.0 },
  { name: "NANO", icon: nanoIcon, balance: 0.0 },
  { name: "SHIBA", icon: shibaIcon, balance: 0.0 },
  {
    name: "Total Withdrawals",
    icon: thetaIcon,
    balance: 0.0,
    value: "withdrawal_balance",
  },
];

export const depositMethods = [
  { name: "Bitcoin", icon: btcIcon, path: "bitcoin" },
  { name: "Ethereum", icon: ethIcon, path: "ethereum" },
  { name: "XRP", icon: xrpIcon, path: "xrp" },
  { name: "XLM", icon: xlmIcon, path: "xlm" },
  { name: "USDT TRC20", icon: usdtIcon, path: "usdt" },
  { name: "DOGEcoin", icon: dogeIcon, path: "dogecoin" },
  { name: "ALGO", icon: algoIcon, path: "algo" },
  { name: "Solana", icon: solIcon, path: "sol" },
  { name: "Litecoin", icon: ltcIcon, path: "ltc" },
  { name: "BNB", icon: bnbIcon, path: "bnb" },
  { name: "Qtum", icon: qtumIcon, path: "qtum" },
  { name: "XTZ", icon: tezosIcon, path: "xtz" },
  { name: "Theta", icon: thetaIcon, path: "theta" },
  { name: "FIL", icon: fileCoinIcon, path: "fil" },
  { name: "XNO", icon: nanoIcon, path: "xno" },
];

export const paymentGateways = [
  {
    type: "Bitcoin",
    value: "BTC_balance",
    qrCode: bitcoinQRCode,
    icon: btcIcon,
    walletAddress: "bc1q5cjpllwrqks02qls0h8fqrcg5sf7p645ljfu5s",
  },
  {
    type: "XRP",
    value: "XRP_balance",
    qrCode: xrpQRCode,
    icon: xrpIcon,
    walletAddress: "rDLPU33UyJBqrZqta6UQxTXaWFsHLtEeyK",
  },
  {
    type: "XLM",
    value: "XLM_balance",
    qrCode: xlmQRCode,
    icon: xlmIcon,
    walletAddress: "GBB2LMYV3TFAOERFCKAXQBN26URID3JRDNGQZT76H3EX7KZIPNWPFA2L",
  },
  {
    type: "ethereum",
    value: "ETH_balance",
    qrCode: ethQRCode,
    icon: ethIcon,
    walletAddress: "0x9B0F25D45525577f1Fc2F3135620610124D41279",
  },
  {
    type: "USDT",
    value: "USDT_balance",
    extra: "(TRC20)",
    qrCode: usdtQRCode,
    icon: usdtIcon,
    walletAddress: "TEXDsvojhqFiz1Htmzsgi2h42uiFZBr4My",
  },
  {
    type: "dogecoin",
    value: "DOGE_balance",
    qrCode: dogeQRCode,
    icon: dogeIcon,
    walletAddress: "D7ZrkPoGZkzoubQG9vpWXiqQy7Ao2htL94",
  },
  {
    type: "Sol",
    value: "SOL_balance",
    icon: solIcon,
    qrCode: solQRCode,
    walletAddress: "Hy8DSfyp9RbGpVetfTF1ofmeYKqYkVKJM54WKACcmbUh",
  },
  {
    type: "Algo",
    value: "ALGO_balance",
    qrCode: algoQRCode,
    icon: algoIcon,
    walletAddress: "SIKHFQRNRHJS3OVORSLKOOABQ7YZD376QDR3J46CUEZ26RNGRXUTZD5WJE",
  },
  {
    type: "LTC",
    value: "LTC_balance",
    qrCode: ltcQRCode,
    icon: ltcIcon,
    walletAddress: "ltc1q3apgwa6yt69arrnnah0gktalz2f0ykeggnxjkq",
  },
  {
    type: "BNB",
    value: "BNB_balance",
    qrCode: bnbQRCode,
    icon: bnbIcon,
    walletAddress: "bnb178dzj4mmlqfhgf2krc5qzefcvc5lrvpqs3860w",
  },
  {
    type: "Qtum",
    value: "QTUM_balance",
    qrCode: qtumQRCode,
    icon: qtumIcon,
    walletAddress: "QU2YFpbSeLeQa1BYymLrgJ8x8f9wpcx6ne",
  },
  {
    type: "XTZ",
    value: "XTZ_balance",
    qrCode: xtzQRCode,
    icon: tezosIcon,
    walletAddress: "tz1TszGTjLQLyijLvX6ZL2s944eNKgW8NPjF",
  },
  {
    type: "Theta",
    value: "THETA_balance",
    qrCode: thetaQRCode,
    icon: thetaIcon,
    walletAddress: "0xcFD0038Dc9EBB6622925769Dbd504167268d28C5",
  },
  {
    type: "FIL",
    value: "FIL_balance",
    qrCode: filQrCode,
    icon: fileCoinIcon,
    walletAddress: "f1mrzximz4q5sf4j67ypjxxbrazctbezk2psaflha",
  },
  {
    type: "XNO",
    value: "XNO_balance",
    qrCode: algoQRCode,
    icon: nanoIcon,
    walletAddress:
      "nano_1fktj5x7j1f5irdct59zs61yp51i5pmq34u5fyus6xajuy61o8pwrkoqnk77",
  },
];

export const withdrawalOptions = [
  {
    title: "XLM",
    value: "XLM_balance",
  },
  {
    title: "XRP",
    value: "XRP_balance",
  },
  {
    title: "Bitcoin",
    value: "BTC_balance",
  },
  {
    title: "USDT",
    value: "USDT_balance",
  },
  {
    title: "Ethereum",
    value: "ETH_balance",
  },
  {
    title: "Doge",
    value: "DOGE_balance",
  },
  {
    title: "Litecoin",
    value: "litecoin_balance",
  },
  {
    title: "ALGORAND",
    value: "ALGO_balance",
  },
  {
    title: "SOLANA",
    value: "SOL_balance",
  },
  {
    title: "BNB",
    value: "bnb_balance",
  },
  {
    title: "QTUM",
    value: "qtum_balance",
  },
  {
    title: "TEZOS (XTZ)",
    value: "tezos_balance",
  },
  {
    title: "THETA",
    value: "theta_balance",
  },
  {
    title: "FILECOIN",
    value: "filecoin_balance",
  },
  {
    title: "NANO",
    value: "nano_balance",
  },
  {
    title: "SHIBA",
    value: "shiba_balance",
  },
];
