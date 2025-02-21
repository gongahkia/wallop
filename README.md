[![](https://img.shields.io/badge/wallop_1.0.0-build_up-dark_green)](https://github.com/gongahkia/wallop/releases/tag/1.0.0) 
[![](https://img.shields.io/badge/wallop_2.0.0-build_up-dark_green)](https://github.com/gongahkia/wallop/releases/tag/1.0.0) 
![](https://img.shields.io/badge/wallop_2.0.0-deployment_down-red)

> [!WARNING]  
> [`Wallop`](https://github.com/gongahkia/wallop)'s Vercel deployment is inactive as of 21 February 2025.
  
> [!IMPORTANT]  
> Please read through [this disclaimer](#disclaimer) before using [Wallop](https://github.com/gongahkia/wallop).

# `Wallop` 🥊

Tinder for recreational fighters.

![](./asset/logo/careful.gif)

## Rationale

Sick of polite smalltalk and gentle interactions? 

Presenting `Wallop`, the web app that cuts right to the chase. 
  
We match fighters who want to throw hands without the bullshit. Calling all martial artists, amateur boxers, keyboard warriors or weekend tweakers - this is your time to shine.

`Wallop` features

* ✅ No-nonsense user verification
* 🥋 Skill-level matching that doesn't lie
* 🛡️ Real safety protocols
* 📍 Public meetup spots for group accountability
* 🤝 Comprehensive consent mechanisms

What are you waiting for? [Get started](#usage) with `Wallop` today!

## Usage

Build [`Wallop`](https://github.com/gongahkia/wallop) locally by following these instructions [here](./src/README.md).

## Architecture

### Overview

```mermaid
sequenceDiagram
    participant F as Frontend
    participant FA as FastAPI Backend
    participant S as Supabase
    
    F->>FA: Send API request with access token
    FA->>FA: Validate token in middleware
    FA->>S: Authenticate user with Supabase client
    S-->>FA: Return authenticated user data
    FA->>FA: Add user_id to request state
    FA->>S: Make authenticated DB query
    S-->>FA: Return query results
    FA-->>F: Send API response

    F->>S: Direct auth requests (login/signup)
    S-->>F: Return access token

    F->>FA: Subsequent API requests with token
    FA->>S: Authenticated operations
    S-->>FA: Return results
    FA-->>F: Send API response
```

### DB

```mermaid
classDiagram
    class Users {
        +int user_id PK
        +string username
        +string email
        +string password_hash
        +date birthdate
        +string gender
        +string bio
        +string profile_picture
        +float rating
        +datetime created_at
        +datetime last_login
    }
    class FightingStyles {
        +int style_id PK
        +string style_name
    }
    class UserStyles {
        +int user_style_id PK
        +int user_id FK
        +int style_id FK
        +int proficiency_level
    }
    class Matches {
        +int match_id PK
        +int user1_id FK
        +int user2_id FK
        +datetime match_date
        +string status
    }
    class Messages {
        +int message_id PK
        +int match_id FK
        +int sender_id FK
        +int receiver_id FK
        +string message_text
        +datetime timestamp
    }
    class Fights {
        +int fight_id PK
        +int match_id FK
        +datetime fight_date
        +string location
        +string result
    }
    class UserPreferences {
        +int preference_id PK
        +int user_id FK
        +int min_age
        +int max_age
        +float max_distance
        +string preferred_styles
    }
    class UserLocation {
        +int location_id PK
        +int user_id FK
        +float latitude
        +float longitude
        +datetime last_updated
    }

    Users "1" -- "0..*" UserStyles
    Users "1" -- "0..*" Matches
    Users "1" -- "1" UserPreferences
    Users "1" -- "1" UserLocation
    FightingStyles "1" -- "0..*" UserStyles
    Matches "1" -- "0..*" Messages
    Matches "1" -- "0..1" Fights
```

## Screenshot

![](./asset/reference/wallop-v2/screenshot-1.png)
![](./asset/reference/wallop-v2/screenshot-3.png)
![](./asset/reference/wallop-v2/screenshot-4.png)
![](./asset/reference/wallop-v2/screenshot-5.png)
![](./asset/reference/wallop-v2/screenshot-6.png)
![](./asset/reference/wallop-v2/screenshot-7.png)
![](./asset/reference/wallop-v2/screenshot-8.png)
![](./asset/reference/wallop-v2/screenshot-9.png)
![](./asset/reference/wallop-v2/screenshot-2.png)
![](./asset/reference/wallop-v2/screenshot-10.png)
![](./asset/reference/wallop-v2/screenshot-11.png)

## Disclaimer

### 1. Purpose of the Application

If it was not immediately apparent, this application is an act of [satirical](https://dictionary.cambridge.org/dictionary/english/satirical) [social commentary](https://dictionary.cambridge.org/dictionary/english/social-commentary), meant to expose the absurdity of modern dating apps by transposing their mechanics onto the intentionally preposterous premise of consensual fighting.  
  
Please be aware that while [`Wallop`](https://github.com/gongahkia/wallop) is a functional web application, it is **not** intended for any actual use, **nor** does it endorse or facilitate any actual fighting. [`Wallop`](https://github.com/gongahkia/wallop) is meant as a purely theoretical platform and all content in this README.md and any source code is protected under artistic speech.

### 2. Resemblance

Any substantive similarity or resemblance to existing digital services, social platforms, human behavioral patterns or actual persons is purely coincidental and constitutes part of [`Wallop`](https://github.com/gongahkia/wallop)'s satirical methodology. [`Wallop`](https://github.com/gongahkia/wallop) therefore expressly disclaims any intentional reference to or imitation of any existing digital services, social platforms, human behavioral patterns or persons. 

### 3. User Acknowledgement

By engaging with [`Wallop`](https://github.com/gongahkia/wallop), users acknowledge they are participating in a meta-commentary on social technology, digital interaction, and human connection and also understand its purely theoretical nature.

## Credit

Concept-wise, `Wallop` takes much inspiration from [Rumblr](https://rumblr.webflow.io/). However, the idea for a *'tinder but for fighting'* app only really came to my attention after a conversation with [Jace Bong](https://www.linkedin.com/in/jace-bong-%F0%9F%91%BE-42b3841b1/?originalSubdomain=sg) in [IS111](https://www.reddit.com/r/SMU_Singapore/comments/14bouko/smu_is_tough_modules_and_is111/?rdt=39799) in my first semester of [university](https://www.smu.edu.sg/).

I've slept on the idea until now, but hopefully I have done it justice.
