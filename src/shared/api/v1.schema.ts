/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

/** WithRequired type helpers */
type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] }

export type paths = {
  "/login": {
    post: {
      requestBody: components["requestBodies"]["Login"]
      responses: {
        201: components["responses"]["LoginSuccess"]
        400: components["responses"]["BadRequest"]
      }
    }
  }
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
    put: {
      parameters: {
        path: {
          id: number
        }
      }
      requestBody: components["requestBodies"]["Book"]
      responses: {
        200: components["schemas"]["Book"]
        400: components["responses"]["BadRequest"]
      }
    }
  }
}

export type webhooks = Record<string, never>

export type components = {
  schemas: {
    Id: {
      id: number
    }
    Email: {
      email?: string
    }
    Password: {
      password?: string
    }
    Authenticated: {
      "access-token": string
    }
    Book: {
      title: string
      /** Format: date */
      borrowDate: string
      /** Format: date */
      returnDate: string
    }
    /** @enum {string} */
    UserRole: "ADMIN" | "COMMON"
    User: {
      role: components["schemas"]["UserRole"]
    }
    BadRequestError: {
      [key: string]: {
        /** Format: int32 */
        code: number
        reason: string
      }
    }
  }
  responses: {
    LoginSuccess: {
      content: {
        "application/json": components["schemas"]["Authenticated"]
      }
    }
    BookSuccess: {
      content: {
        "application/json": (components["schemas"]["Id"] & components["schemas"]["Book"])[]
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
    Login?: {
      content: {
        "application/json": WithRequired<
          components["schemas"]["Email"] & components["schemas"]["Password"],
          "email" | "password"
        >
      }
    }
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
