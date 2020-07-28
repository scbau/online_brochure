import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

import { Hero } from '../../models/data';
import { List } from '../../models/list';
// import { HeroService } from '../../services/data/data.services';

import { MessageService } from '../../services/message/message.service';

interface FoodNode {
    id: number,
    name: string,
    children?: FoodNode[],
    route?: string,
    selected?: boolean,
    subname?: string
}

var TREE_DATA: FoodNode[] = [
    {
        "id": 1,
        "name": "SCB",
        "children": [
            {
                "id": 11, "name": "Brochures", "children": [
                    { "id": 111, "name": "Automotive Range", "selected": false, "route": "/scb/automotive" },
                    { "id": 112, "name": "Dual Purpose Range", "selected": false, "route": "/scb/dual-purpose" },
                    { "id": 113, "name": "Golf Cart Range", "selected": false, "route": "/scb/golf-cart" },
                    { "id": 114, "name": "Lawncare Range", "selected": false, "route": "/scb/lawncare" },
                    { "id": 115, "name": "Marine Range", "selected": false, "route": "/scb/marine" },
                    { "id": 116, "name": "Start-Stop Range", "selected": false, "route": "/scb/start-stop" },
                    { "id": 117, "name": "Truck Range", "selected": false, "route": "/scb/truck" },
                    { "id": 118, "name": "Gladiator Range", "selected": false, "route": "/scb/gladiator" },
                    { "id": 119, "name": "AMP-Tech Flooded Deep Cycle Range", "selected": false, "route": "/scb/amp-tech-flooded-deep-cycle" }
                ]
            },
            {
                "id": 12, "name": "Videos", "children": [
                    { "id": 121, "name": "Supercharge M1 R5", "selected": false, "route": "/videos/scb/m1" },
                    { "id": 122, "name": "Supercharge M2", "selected": false, "route": "/videos/scb/m2" },
                    { "id": 123, "name": "Supercharge M3", "selected": false, "route": "/videos/scb/m3" },
                    { "id": 124, "name": "Supercharge M4", "selected": false, "route": "/videos/scb/m4" },
                    { "id": 125, "name": "Supercharge M5", "selected": false, "route": "/videos/scb/m5" },
                    { "id": 126, "name": "Supercharge M6", "selected": false, "route": "/videos/scb/m6" }
                ]
            }
        ]
    },
    {
        "id": 2,
        "name": "Exide",
        "children": [
            {
                "id": 21, "name": "Brochures", "children": [
                    { "id": 211, "selected": false, "name": "Evolution Start-Stop Range", "route": "/exide/evolution-start-stop"},
                    { "id": 212, "selected": false, "name": "Heavy Commercial Range", "route": "/exide/heavy-commercial" },
                    { "id": 213, "selected": false, "name": "Industrial Cycling Range", "route": "/exide/industrial-cycling" },
                    { "id": 214, "selected": false, "name": "Marine Stowaway Range", "route": "/exide/marine-stowaway" },
                    { "id": 215, "selected": false, "name": "Passenger Range", "route": "/exide/passenger" },
                    { "id": 216, "selected": false, "name": "Powerider Range", "route": "/exide/powerider" },
                    { "id": 217, "selected": false, "name": "SUV 4WD Light Range", "route": "/exide/suv-4wd-light" }
                ]
            },
            {
                "id": 12, "name": "Videos", "children": [
                    { "id": 221, "name": "Module A - What is a Battery", "selected": false, "route": "/videos/exide/m1" },
                    { "id": 222, "name": "Module B - Testing a Battery", "selected": false, "route": "/videos/exide/m2" },
                    { "id": 223, "name": "Module C - Testing a Battery using an electronic tester", "selected": false, "route": "/videos/exide/m3" },
                    { "id": 224, "name": "Module D - Testing using a hydrometer & multimeter", "selected": false, "route": "/videos/exide/m4" },
                    { "id": 225, "name": "Module D1 - Testing a Battery using hydrometer", "selected": false, "route": "/videos/exide/m5" },
                    { "id": 226, "name": "Module D2 - Testing a Battery using multimeter", "selected": false, "route": "/videos/exide/m6" },
                    { "id": 227, "name": "Module E - How to Charge a Battery", "selected": false, "route": "/videos/exide/m7" },
                    { "id": 228, "name": "Module F - How to Install a Battery", "selected": false, "route": "/videos/exide/m8" },
                    { "id": 229, "name": "Module G - Managing Warranty", "selected": false, "route": "/videos/exide/m9" },
                    { "id": 2210, "name": "Module H", "selected": false, "route": "/videos/exide/m10" }
                ]
            }
        ]
    },
    {
        "id": 3,
        "name": "Alco",
        "children": [
            {
                "id": 31, "name": "Brochures", "children": [
                    { "id": 311, "selected": false, "name": "Automotive Range", "route": "/alco/automotive"},
                    { "id": 312, "selected": false, "name": "Automotive Alco3000 Range", "route": "/alco/automotive-alco3000" },
                    { "id": 313, "selected": false, "name": "Dual Purpose Range", "route": "/alco/dual-purpose" },
                    { "id": 314, "selected": false, "name": "Lawn Mower Range", "route": "/alco/lawn-mower" },
                    { "id": 315, "selected": false, "name": "Marine Range", "route": "/alco/marine" },
                    { "id": 316, "selected": false, "name": "Start-Stop Range", "route": "/alco/start-stop" },
                    { "id": 317, "selected": false, "name": "Truck Range", "route": "/alco/truck" },
                    // { "id": 218, "name": "Gladiator Range", "route": "/scb/gladiator" }
                ]
            }/*,
            {
                "id": 22, "name": "Videos", "children": [
                    { "id": 221, "name": "Supercharge M1 R5", "route": "/video" },
                    { "id": 222, "name": "Supercharge M2", "route": "/video" }
                ]
            }*/
        ]
    }
];

var currentNode: FoodNode = TREE_DATA[0].children[0].children[0];

@Component({
    selector: 'app-sidebar',
    providers: [MessageService],
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit, OnDestroy {

    treeControl = new NestedTreeControl<FoodNode>(node => node.children);
    dataSource = new MatTreeNestedDataSource<FoodNode>();

    heroes: Hero[];
    panelOpenState = true;
    navbarText: string = "";
    mobileQuery: MediaQueryList;
    router: Router;
    /*fillerNav = [
        {
            "name": "Group 1",
            "contents": [
                { "name": "Item 1-1" },
                { "name": "Item 1-2" }
            ]
        },
        {
            "name": "Group 2",
            "contents": [
                { "name": "Item 2-1" },
                { "name": "Item 2-2" },
                { "name": "Item 2-3" }
            ]
        },
        {
            "name": "Group 3",
            "contents": [
                { "name": "Item 3-1" },
                { "name": "Item 3-2" }
            ]
        }
    ];*/



    // fillerNav: List[];

    data;
    message;

    constructor(
        private _router: Router,
        private activatedRoute: ActivatedRoute,
        private messageService: MessageService,
        changeDetectorRef: ChangeDetectorRef, 
        media: MediaMatcher, 
        iconRegistry: MatIconRegistry, 
        sanitizer: DomSanitizer) {

        this.router = _router;

        this.dataSource.data = TREE_DATA;

        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);

        iconRegistry.addSvgIcon(
            'menu',
            sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/menu.svg'));

    }

    hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
    private _mobileQueryListener: () => void;

    ngOnInit() {
        // this.getHeroes();
        this.messageService.currentMessage.subscribe(message => { this.navbarText = message; console.log(message); });

        this.navbarText = this.data.title;

        console.log(this.data);
        var currentNodeID = this.data.id.toString();

        var tempElem = currentNodeID.charAt(0);
        currentNodeID = currentNodeID.slice(1);
        var firstElem = parseInt(tempElem) - 1;

        tempElem = currentNodeID.charAt(0);
        currentNodeID = currentNodeID.slice(1);
        var secondElem = parseInt(tempElem) - 1;
        var thirdElem = parseInt(currentNodeID) - 1;
        // this.getList();

        currentNode = TREE_DATA[firstElem].children[secondElem].children[thirdElem];
        console.log(currentNode);
    }

    /*getList(): void {
        console.log('test');
        this.heroService.getList()
            .subscribe(list => this.fillerNav = list);
    }*/

    /*getHeroes(): void {
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes);
    }*/

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }

    changeRoute(node: FoodNode): void {
        this.navbarText = node.name;
        
        var currentNodeID = currentNode.id.toString();
        var nextNodeID = node.id.toString();

        var tempElem = currentNodeID.charAt(0);
        currentNodeID = currentNodeID.slice(1);
        var firstElem = parseInt(tempElem) - 1;

        tempElem = currentNodeID.charAt(0);
        currentNodeID = currentNodeID.slice(1);
        var secondElem = parseInt(tempElem) - 1;
        var thirdElem = parseInt(currentNodeID) - 1;

        TREE_DATA[firstElem].children[secondElem].children[thirdElem].selected = false;

        tempElem = nextNodeID.charAt(0);
        nextNodeID = nextNodeID.slice(1);
        firstElem = parseInt(tempElem) - 1;

        tempElem = nextNodeID.charAt(0);
        nextNodeID = nextNodeID.slice(1);
        secondElem = parseInt(tempElem) - 1;
        thirdElem = parseInt(nextNodeID) - 1;

        currentNode = TREE_DATA[firstElem].children[secondElem].children[thirdElem]
        currentNode.selected = true;

        this.router.navigateByUrl(node.route);
    }

    public setTitle(text: string): void {
        this.navbarText = text;
    }
}
