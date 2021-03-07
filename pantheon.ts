import { getPageMetrics } from ".";
import { Webpage } from "./webpage"


const webpages: Webpage[] = [];
webpages.push(
    new Webpage("Drupal Website", "https://live-wisconsin.pantheonsite.io"),
    new Webpage("Drupal Website", "https://dev-kentucky.pantheonsite.io"),
    new Webpage("Drupal Website", "https://dev-presenter.pantheonsite.io"),
    new Webpage("Drupal Website", "https://dev-oregon.pantheonsite.io"),
    new Webpage("Drupal Website", "https://dev-idahodeveloper.pantheonsite.io"),
    new Webpage("Drupal Website", "https://dev-bang.pantheonsite.io"),
    new Webpage("Drupal Website", "https://dev-usa.pantheonsite.io"),
    new Webpage("Drupal Website", "https://live-bang.pantheonsite.io"),
    new Webpage("Drupal Website", "https://dev-deutschland.pantheonsite.io"),
    new Webpage("Drupal Website", "https://dev-election2020.pantheonsite.io"),
    new Webpage("Drupal Website", "https://dev-indecision.pantheonsite.io"),
    new Webpage("Drupal Website", "https://dev-europeanunion.pantheonsite.io"),
    new Webpage("Drupal Website", "https://dev-iowa.pantheonsite.io"),
    new Webpage("Drupal Website", "https://test-europeanunion.pantheonsite.io"),
    new Webpage("Drupal Website", "https://test-iowa.pantheonsite.io"),
    new Webpage("Drupal Website", "https://live-europeanunion.pantheonsite.io"),
    new Webpage("Drupal Website", "https://live-iowa.pantheonsite.io"),
    new Webpage("Drupal Website", "https://dev-official.pantheonsite.io"),
    new Webpage("Drupal Website", "https://dev-portland.pantheonsite.io"),
    new Webpage("Drupal Website", "https://dev-meeting.pantheonsite.io"),
    new Webpage("Drupal Website", "https://dev-serious.pantheonsite.io"),
    new Webpage("Drupal Website", "https://dev-nevada.pantheonsite.io"),
    new Webpage("Drupal Website", "https://dev-utah.pantheonsite.io"),
    new Webpage("Drupal Website", "https://dev-colorado.pantheonsite.io"),
    new Webpage("Drupal Website", "https://dev-queenslibrary.pantheonsite.io"),
    new Webpage("Drupal Website", "https://dev-newjersey.pantheonsite.io"),
    new Webpage("Drupal Website", "https://dev-subaru.pantheonsite.io"),
    new Webpage("Drupal Website", "https://dev-boise.pantheonsite.io"),
    new Webpage("Drupal Website", "https://dev-visitboise.pantheonsite.io"),
    new Webpage("Drupal Website", "https://dev-waitinglist.pantheonsite.io")
);

getPageMetrics(webpages);
