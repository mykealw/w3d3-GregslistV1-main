import { ProxyState } from "../AppState.js";
import { getJobsForm } from "../components/JobForm.js";
import {jobsService } from "../Services/JobsService.js";
import { Pop } from "../Utils/Pop.js";


function _drawJobs(){
let jobCardTemplate = ''
ProxyState.jobs.forEach( job => jobCardTemplate += job.CardTemplate)
}

export class JobsController {
    constructor(){
        ProxyState.on('jobs', _drawJobs)
    }




    drawJobs(){
        _drawJobs()
    }
}