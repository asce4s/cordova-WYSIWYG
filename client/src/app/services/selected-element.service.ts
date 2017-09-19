import {Injectable} from '@angular/core';
import {Button} from "../interfaces/button";

@Injectable()
export class SelectedElementService {

    constructor() {
    }

    public selectedButton: Button;

}
