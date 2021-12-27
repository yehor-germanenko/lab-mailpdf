import * as HecmPdf from "./templates/Hecm";
import * as BudgetPdf from "./templates/Budget";
import * as BuyWaitPdf from "./templates/BuyWait";
import * as VacationPdf from "./templates/Vacation";
import * as SellerNetPdf from "./templates/SellerNet";
import * as BuyOrRentPdf from "./templates/BuyOrRent";
import * as InvestmentPdf from "./templates/Investment";
import * as ClosingCostPdf from "./templates/ClosingCost";
import * as AmortizationPdf from "./templates/Amortization";
import * as BuyeraChoicePdf from "./templates/BuyersChoice";

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
