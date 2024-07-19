<!-- @format -->

# Problem 6

# `score-update` Module Documentation

## Overview

The `score-update` module enables real-time updates of user scores on a
leaderboard, ensuring secure and authorized score increments.

## Features

- **Real-time Score Updates**: Updates user scores dynamically on the
  leaderboard.
- **Authentication**: Prevents unauthorized users from updating scores.

## API Endpoints

- `POST /api/score/update`
  - **Description**: Endpoint to update user scores.
  - **Request Parameters**:
    - `userId`: ID of the user to update the score.
    - `scoreIncrement`: Amount to increase (positive) or decrease (negative) the
      score.

## Installation

### System Requirements

- Node.js
- MongoDB

### Installation Steps

1. Clone the repository: git clone <repository_url>

2. Install dependencies: npm install

3. Start the server: npm start

## Improvements

- **Enhanced Security**: Implement JWT authentication to validate users before
  allowing score updates.
- **User Interface Enhancement**: Develop a user interface for easier management
  and viewing of the leaderboard.

## Notes

This document serves as a guide for the backend engineering team to implement
the `score-update` module.
