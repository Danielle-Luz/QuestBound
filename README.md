## Requirements
### Account Management

* Users should be able to create accounts using an email address and password.
* When creating an account with an email address and password, users should provide:

  * Username
  * Email address
  * Password
  * Birth date
  * Experience level, with the following options:

    * Novice
    * Initiate
    * Experienced
    * Veteran
  * One or more preferred RPG systems, with the following options:

    * Ordem Paranormal
    * Dungeons & Dragons
    * Tormenta20
* Users should also be able to create accounts by signing in with Google or Discord.
* An email should not be related to more than one account.
* If a password is provided when creating a user with an email, it should contain at least 8 caracters.

### RPG Campaigns

* Users should be able to create RPG campaigns by providing:

  * Name
  * RPG system
  * Story premise
  * Number of required players
* When an RPG campaign is created, the site should automatically generate a banner based on the campaign's premise.
* When logged in, users should be able to see a list of open RPG campaigns that have not yet filled all available vacancies.
* RPG campaigns using the user's preferred systems should appear first, ordered by creation date.
* By default, closed RPG campaigns should be filtered out.

  * Users should be able to choose to display closed RPG campaigns, but these campaigns should appear at the end of the list.
* Users should be able to select an RPG campaign to view its details. The campaign details screen should display:

  * Name
  * Banner
  * RPG system
  * Story premise
  * Number of remaining vacancies
  * Number of filled vacancies
  * Creation date
* On the RPG campaign details screen, users should be able to apply to join the campaign as a player.
* On the RPG campaign details screen, users should be able to see the candidates who have already been approved as players.
* On the RPG campaign details screen, the campaign master should be able to see all candidates.

### Notifications

* Users should be able to view a notifications panel displaying:

  * Notifications about their applications being accepted or rejected.
  * Notifications when a new application is submitted to an RPG campaign they are the master of.
  * Notifications when a player is removed from an RPG campaign.

### Campaign Applications

* If all vacancies in an RPG campaign have been filled, the application button should not be displayed.
* When the user clicks the application button, they should be able to:

  * Select an existing character created for the same RPG system as the campaign.
  * Create a new character.

### Characters

* On the new character screen, users should be able to provide:

  * Name
  * Birth date
  * RPG system, which should default to the RPG system of the selected campaign.
  * Physical description
* The following character characteristics should be displayed according to the selected RPG system:

  * Class
  * Species
  * Origin
* A character portrait should be automatically generated based on the physical description.
* Users should be able to view all characters they have previously created.
* On the characters list screen, users should be able to see:

  * The number of campaigns they have applied to.
  * The number of campaigns with pending applications.
  * The number of applications that have been accepted.
  * The RPG campaigns they have participated in.
* On the characters list screen, users should be able to create a new character.
* When creating a new character from the characters list screen, users should be able to select any supported RPG system.

### Content Moderation

* Sentiment and content analysis should be performed on campaign and character descriptions, when provided.
* If insults or slurs are detected, the user should be prevented from saving the text.
* When feedback is submitted, an AI-based content analysis should be performed to identify insults or slurs.
* If insults or slurs are detected, the feedback should not be published.

### Campaign Participation

* The campaign creator (master) should be able to remove accepted players from the campaign.
* Users who have been accepted as players should be able to leave feedback and give a rating to the other players in the campaign.
* Users should be able to edit or delete feedback they have submitted.
* The campaign creator (master) should be able to kick players out of the campaign.
* Users should be able to leave an RPG campaign voluntarily.
* If a player is kicked out of a campaign or leaves voluntarily, the number of available vacancies should increase.

# API Functionalities by Resource

## User

* Create a user
* Get a user
* Update a user
* Authenticate a user
* Log out

## RPG System

* Get all RPG systems

## Class

* Get all classes

## Origin

* Get all origins

## Species

* Get all species

## Campaign

* Create a campaign
* Get a campaign by ID, including its candidatures
* Get multiple campaigns with:

  * User-preferred RPG systems prioritized
  * Results ordered by creation date by default
  * Number of remaining vacancies
* Filter campaigns by:

  * RPG system
  * Age rating
  * Name
  * Vacancy availability
* Paginate campaign results using:

  * Page
  * Limit
* Sort campaigns by:

  * Creation date
  * Last update date
  * Age rating
  * Name
* Update a campaign
* Delete a campaign

## Candidature

* Create a candidature
* Get a user's candidatures, including the associated character
* Get a campaign's candidatures, including the associated character
* Change the character associated with a candidature
* Accept a candidature
* Reject a candidature
* Withdraw a candidature
* Remove a candidature
* Increase user experience level when candidature is accepted

## Character

* Create a character
* Get all characters belonging to a user
* Update a character
* Delete a character

## Feedback

* Create feedback
* Get feedback received by a user
* Update feedback
* Delete feedback
