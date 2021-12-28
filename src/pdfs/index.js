import HecmPdf from "./templates/Hecm";
import BudgetPdf from "./templates/Budget";
import BuyWaitPdf from "./templates/BuyWait";
import VacationPdf from "./templates/Vacation";
import SellerNetPdf from "./templates/SellerNet";
import BuyOrRentPdf from "./templates/BuyOrRent";
import InvestmentPdf from "./templates/Investment";
import ClosingCostPdf from "./templates/ClosingCost";
import AmortizationPdf from "./templates/Amortization";
import BuyeraChoicePdf from "./templates/BuyersChoice";

export const pdfComponents = {
    "buyer-qual": BuyeraChoicePdf,
    "buyer-choice": BuyeraChoicePdf,
    "amortization": AmortizationPdf,
    "budget": BudgetPdf,
    "buy-wait": BuyWaitPdf,
    "closing-cost": ClosingCostPdf,
    "hecm": HecmPdf,
    "invest": InvestmentPdf,
    "seller-net": SellerNetPdf,
    "buy-rent": BuyOrRentPdf,
    "vacation": VacationPdf
}
