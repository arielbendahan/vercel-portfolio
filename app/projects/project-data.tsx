export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "SimuBet",
    year: 2024,
    description:
      "A simulated sports betting Android application that allows the user to bet on various sports. Built with Java and managed with a Firebase database.",
    url: "https://github.com/arielbendahan/SimuBet-Project",
  },
  {
    title: "FENT Games",
    year: 2024,
    description:
      "A website that features an online learning game designed for children. Built primarily using PHP for the game’s code, SQL for managing a user’s score history and uses CSS for the website’s styling.",
    url: "https://github.com/zikail/PrjPhp-FENTGames",
  },
  {
    title: "Property Rental Management",
    year: 2024,
    description:
      "A web application that allows various user types to manage apartments, buildings and tenants. Built with C# and ASP.NET MVC for the main code and database relationships with the code, SQL for the database and HTML+CSS for the page styling",
    url: "https://github.com/arielbendahan/Property-Rental-Management",
  },
];
