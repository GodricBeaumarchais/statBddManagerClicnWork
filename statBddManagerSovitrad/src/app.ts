import updateActivePropositionDatabaseWithApiData from "./activeProposition/verifyCopy";
import updateClientDatabaseWithApiData from "./client/verifyCopy";
import updateClientExchangeDatabaseWithApiData from "./clientExchange/verifyCopy";
import updateRecrutementDatabaseWithApiData from "./recruitments/verifyCopy";
import updateCandidateDatabaseWithApiData from "./candidate/verifyCopy";


async function main() {
    updateActivePropositionDatabaseWithApiData().catch(console.error);
    updateClientDatabaseWithApiData().catch(console.error);
    updateClientExchangeDatabaseWithApiData().catch(console.error);
    updateRecrutementDatabaseWithApiData().catch(console.error);
    updateCandidateDatabaseWithApiData().catch(console.error);

}

main();