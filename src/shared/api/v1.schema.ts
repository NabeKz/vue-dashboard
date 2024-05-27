/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = {
  "/me": {
    get: {
      responses: {
        200: {
          content: {
            "application/json": components["schemas"]["User"]
          }
        }
      }
    }
  }
  "/books": {
    get: {
      parameters: {
        query?: {
          title?: string
          "date-from"?: string
          "date-to"?: string
        }
      }
      responses: {
        200: components["responses"]["BookSuccess"]
        400: components["responses"]["BadRequest"]
      }
    }
    post: {
      requestBody: components["requestBodies"]["Book"]
      responses: {
        200: components["schemas"]["Book"]
        400: components["responses"]["BadRequest"]
      }
    }
  }
  "/books/{id}": {
    get: {
      parameters: {
        path: {
          id: number
        }
      }
      responses: {
        200: components["responses"]["BookSuccess"]
        400: components["responses"]["BadRequest"]
      }
    }
  }
}

export type webhooks = Record<string, never>

export type components = {
  schemas: {
    Book: {
      id: number
      title: string
      /** Format: date */
      borrowDate: string
      /** Format: date */
      returnDate: string
    }
    /** @enum {string} */
    UserRole: "ADMIN" | "COMMON"
    User: {
      id?: number
      role?: components["schemas"]["UserRole"]
    }
    BadRequestError: {
      field?: {
        /** Format: int32 */
        code?: number
        reason?: string
      }
    }
  }
  responses: {
    BookSuccess: {
      content: {
        "application/json": components["schemas"]["Book"][]
      }
    }
    BadRequest: {
      content: {
        "application/json": components["schemas"]["BadRequestError"][]
      }
    }
  }
  parameters: {
    BookListParams: string
  }
  requestBodies: {
    Book?: {
      content: {
        "application/json": components["schemas"]["Book"]
      }
    }
  }
  headers: never
  pathItems: never
}

export type $defs = Record<string, never>

export type external = Record<string, never>

export type operations = Record<string, never>