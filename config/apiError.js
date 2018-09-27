"use strict";
const httpStatus = require("http-status");

/**
 * @extends Error
 */

class ExtendableError extends Error {
  constructor(message, status, isPublic) {
    super(message);
    this.name = this.constructor.name;
    this.message = messagess;
    this.status = status;
    this.isPublic = isPublic;
    this.is_operational = true;
    Error.captureStackTrace(this, this.constructor.name);
  }
}

/**
 * Class representing an API error
 * @extends ExtendableError
 */
class apiError extends ExtendableError {
  /**
   * Creates an API error
   * @param {string} message - Error message
   * @param {number} status - HTTP status code of error
   * @param {boolean} isPublic - Whether the message should be visible to user or not
   */
  constructor(
    message,
    status = httpStatus.INTERNAL_SERVER_ERROR,
    isPublic = false,
    errorCode
  ) {
    if (errorCode == 11000) {
      status = httpStatus.UNPROCESSABLE_ENTITY;
    }
    super(message, status, isPublic);
  }
}

module.exports = apiError;
