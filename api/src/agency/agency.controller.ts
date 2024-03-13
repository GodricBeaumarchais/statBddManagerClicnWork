import { Controller, Get } from '@nestjs/common';
import  MainAgencyService  from '../../../lib/services/agency/agency.service';
@Controller('agency')
export class AgencyController {

    @Get()
    getAllAgencies() {
        return MainAgencyService.getAllMainAgency();
    }
}
