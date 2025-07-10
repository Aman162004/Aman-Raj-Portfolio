// projects.service.ts
import { Injectable } from '@angular/core';
import { Tag } from '../_modles/Tag'; // Correct relative path from _services
import { project } from '../_modles/Project'; // Correct relative path from _services

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: project[] = [
      { id: 0, name: "AQI Monitering System", pictures: ["../../assets/SDI1.png", "../../assets/SDI3.png", "../../assets/SDI2.png", "../../assets/SDI4.png"], projectLink: "https://github.com/amanraj-04/Crafting-Sustainable-solution-for-Cleaner-Healthier-Air-in-Delhi.git", summary: "A modal which we presented in Smart Delhi Ideathon to predict AQI and source of pollution", description: "Used AI to analyse air quality data, identify pollution sources, and optimise solutions like traffic management and industrial emissions control. It has real-time air quality monitoring, pollution source detection, predictive analytics, and automated recommendations for pollution reduction. The expected outcome will improve air quality, reduce health risks, and promote sustainable urban practices for cleaner air in Delhi.", tags: [Tag.PYTHON, Tag.REACT,Tag.JAVASCRIPT] },
      { id: 1, name: "My Portfolio Webpage", pictures: ["../../assets/portfolio1.png", "../../assets/portfolio2.png", "../../assets/portfolio3.png"], projectLink: "https://github.com/Aman162004/Aman-Raj-Poertfolio.git", summary: "Fullstack web app developed using Angular and POSTMAN APIs, Mini Projects APIs", description: "This full-stack web application was developed using Angular for the front-end, providing a dynamic and responsive user interface. It seamlessly integrates with various POSTMAN APIs and other Mini Projects APIs to fetch and manage data, demonstrating robust API consumption and data handling capabilities. The project showcases proficiency in building comprehensive web solutions by connecting front-end experiences with diverse back-end functionalities.", tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.JAVASCRIPT] },
    ];
  constructor() { }

  getProjects(){
    return this.projects;
  }

  getProjectById(id: number): project {
    let project = this.projects.find(project => project.id == id);

    if(project === undefined){
      throw new TypeError("There is no such Project with this id" + id);
    }
    return project;
  }
}