import HecmPdf from "./templates/Hecm";
import BudgetPdf from "./templates/Budget";
import VacationPdf from "./templates/Vacation";
import RobPdf from "./templates/Rob/report.pdf";
import SellerNetPdf from "./templates/SellerNet";
import InvestmentPdf from "./templates/Investment";
import ClosingCostPdf from "./templates/ClosingCost";
import AmortizationPdf from "./templates/Amortization";
import BuyWaitPdf from "./templates/BuyWait/report.pdf";
import BuyerChoicePdf from "./templates/BuyerChoice/report.pdf";

export const pdfComponents = {
    "buyer-qual": BuyerChoicePdf,
    "buyer-choice": BuyerChoicePdf,
    "amortization": AmortizationPdf,
    "budget": BudgetPdf,
    "buy-wait": BuyWaitPdf,
    "closing-cost": ClosingCostPdf,
    "hecm": HecmPdf,
    "invest": InvestmentPdf,
    "seller-net": SellerNetPdf,
    "buy-rent": RobPdf,
    "vacation": VacationPdf
}
