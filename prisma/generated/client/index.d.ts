
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Book
 * 
 */
export type Book = $Result.DefaultSelection<Prisma.$BookPayload>
/**
 * Model Author
 * 
 */
export type Author = $Result.DefaultSelection<Prisma.$AuthorPayload>
/**
 * Model Reader
 * 
 */
export type Reader = $Result.DefaultSelection<Prisma.$ReaderPayload>
/**
 * Model Loan
 * 
 */
export type Loan = $Result.DefaultSelection<Prisma.$LoanPayload>
/**
 * Model Genre
 * 
 */
export type Genre = $Result.DefaultSelection<Prisma.$GenrePayload>
/**
 * Model BookGenre
 * 
 */
export type BookGenre = $Result.DefaultSelection<Prisma.$BookGenrePayload>
/**
 * Model Publisher
 * 
 */
export type Publisher = $Result.DefaultSelection<Prisma.$PublisherPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const LoanStatus: {
  ISSUED: 'ISSUED',
  NOT_ISSUED: 'NOT_ISSUED'
};

export type LoanStatus = (typeof LoanStatus)[keyof typeof LoanStatus]

}

export type LoanStatus = $Enums.LoanStatus

export const LoanStatus: typeof $Enums.LoanStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Books
 * const books = await prisma.book.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Books
   * const books = await prisma.book.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.book`: Exposes CRUD operations for the **Book** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.book.findMany()
    * ```
    */
  get book(): Prisma.BookDelegate<ExtArgs>;

  /**
   * `prisma.author`: Exposes CRUD operations for the **Author** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authors
    * const authors = await prisma.author.findMany()
    * ```
    */
  get author(): Prisma.AuthorDelegate<ExtArgs>;

  /**
   * `prisma.reader`: Exposes CRUD operations for the **Reader** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Readers
    * const readers = await prisma.reader.findMany()
    * ```
    */
  get reader(): Prisma.ReaderDelegate<ExtArgs>;

  /**
   * `prisma.loan`: Exposes CRUD operations for the **Loan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Loans
    * const loans = await prisma.loan.findMany()
    * ```
    */
  get loan(): Prisma.LoanDelegate<ExtArgs>;

  /**
   * `prisma.genre`: Exposes CRUD operations for the **Genre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genre.findMany()
    * ```
    */
  get genre(): Prisma.GenreDelegate<ExtArgs>;

  /**
   * `prisma.bookGenre`: Exposes CRUD operations for the **BookGenre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookGenres
    * const bookGenres = await prisma.bookGenre.findMany()
    * ```
    */
  get bookGenre(): Prisma.BookGenreDelegate<ExtArgs>;

  /**
   * `prisma.publisher`: Exposes CRUD operations for the **Publisher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Publishers
    * const publishers = await prisma.publisher.findMany()
    * ```
    */
  get publisher(): Prisma.PublisherDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.0.1
   * Query Engine version: 5dbef10bdbfb579e07d35cc85fb1518d357cb99e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Book: 'Book',
    Author: 'Author',
    Reader: 'Reader',
    Loan: 'Loan',
    Genre: 'Genre',
    BookGenre: 'BookGenre',
    Publisher: 'Publisher'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "book" | "author" | "reader" | "loan" | "genre" | "bookGenre" | "publisher"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Book: {
        payload: Prisma.$BookPayload<ExtArgs>
        fields: Prisma.BookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findFirst: {
            args: Prisma.BookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findMany: {
            args: Prisma.BookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          create: {
            args: Prisma.BookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          createMany: {
            args: Prisma.BookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          delete: {
            args: Prisma.BookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          update: {
            args: Prisma.BookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          deleteMany: {
            args: Prisma.BookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          aggregate: {
            args: Prisma.BookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBook>
          }
          groupBy: {
            args: Prisma.BookGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookCountArgs<ExtArgs>
            result: $Utils.Optional<BookCountAggregateOutputType> | number
          }
        }
      }
      Author: {
        payload: Prisma.$AuthorPayload<ExtArgs>
        fields: Prisma.AuthorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          findFirst: {
            args: Prisma.AuthorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          findMany: {
            args: Prisma.AuthorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[]
          }
          create: {
            args: Prisma.AuthorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          createMany: {
            args: Prisma.AuthorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[]
          }
          delete: {
            args: Prisma.AuthorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          update: {
            args: Prisma.AuthorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          deleteMany: {
            args: Prisma.AuthorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AuthorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          aggregate: {
            args: Prisma.AuthorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthor>
          }
          groupBy: {
            args: Prisma.AuthorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthorCountArgs<ExtArgs>
            result: $Utils.Optional<AuthorCountAggregateOutputType> | number
          }
        }
      }
      Reader: {
        payload: Prisma.$ReaderPayload<ExtArgs>
        fields: Prisma.ReaderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReaderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReaderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReaderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReaderPayload>
          }
          findFirst: {
            args: Prisma.ReaderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReaderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReaderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReaderPayload>
          }
          findMany: {
            args: Prisma.ReaderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReaderPayload>[]
          }
          create: {
            args: Prisma.ReaderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReaderPayload>
          }
          createMany: {
            args: Prisma.ReaderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReaderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReaderPayload>[]
          }
          delete: {
            args: Prisma.ReaderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReaderPayload>
          }
          update: {
            args: Prisma.ReaderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReaderPayload>
          }
          deleteMany: {
            args: Prisma.ReaderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReaderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReaderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReaderPayload>
          }
          aggregate: {
            args: Prisma.ReaderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReader>
          }
          groupBy: {
            args: Prisma.ReaderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReaderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReaderCountArgs<ExtArgs>
            result: $Utils.Optional<ReaderCountAggregateOutputType> | number
          }
        }
      }
      Loan: {
        payload: Prisma.$LoanPayload<ExtArgs>
        fields: Prisma.LoanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LoanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LoanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload>
          }
          findFirst: {
            args: Prisma.LoanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LoanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload>
          }
          findMany: {
            args: Prisma.LoanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload>[]
          }
          create: {
            args: Prisma.LoanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload>
          }
          createMany: {
            args: Prisma.LoanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LoanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload>[]
          }
          delete: {
            args: Prisma.LoanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload>
          }
          update: {
            args: Prisma.LoanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload>
          }
          deleteMany: {
            args: Prisma.LoanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LoanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LoanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload>
          }
          aggregate: {
            args: Prisma.LoanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoan>
          }
          groupBy: {
            args: Prisma.LoanGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoanGroupByOutputType>[]
          }
          count: {
            args: Prisma.LoanCountArgs<ExtArgs>
            result: $Utils.Optional<LoanCountAggregateOutputType> | number
          }
        }
      }
      Genre: {
        payload: Prisma.$GenrePayload<ExtArgs>
        fields: Prisma.GenreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GenreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GenreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findFirst: {
            args: Prisma.GenreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GenreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findMany: {
            args: Prisma.GenreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          create: {
            args: Prisma.GenreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          createMany: {
            args: Prisma.GenreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GenreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          delete: {
            args: Prisma.GenreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          update: {
            args: Prisma.GenreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          deleteMany: {
            args: Prisma.GenreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GenreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GenreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          aggregate: {
            args: Prisma.GenreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenre>
          }
          groupBy: {
            args: Prisma.GenreGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenreGroupByOutputType>[]
          }
          count: {
            args: Prisma.GenreCountArgs<ExtArgs>
            result: $Utils.Optional<GenreCountAggregateOutputType> | number
          }
        }
      }
      BookGenre: {
        payload: Prisma.$BookGenrePayload<ExtArgs>
        fields: Prisma.BookGenreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookGenreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookGenrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookGenreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookGenrePayload>
          }
          findFirst: {
            args: Prisma.BookGenreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookGenrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookGenreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookGenrePayload>
          }
          findMany: {
            args: Prisma.BookGenreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookGenrePayload>[]
          }
          create: {
            args: Prisma.BookGenreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookGenrePayload>
          }
          createMany: {
            args: Prisma.BookGenreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookGenreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookGenrePayload>[]
          }
          delete: {
            args: Prisma.BookGenreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookGenrePayload>
          }
          update: {
            args: Prisma.BookGenreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookGenrePayload>
          }
          deleteMany: {
            args: Prisma.BookGenreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookGenreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookGenreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookGenrePayload>
          }
          aggregate: {
            args: Prisma.BookGenreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookGenre>
          }
          groupBy: {
            args: Prisma.BookGenreGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookGenreGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookGenreCountArgs<ExtArgs>
            result: $Utils.Optional<BookGenreCountAggregateOutputType> | number
          }
        }
      }
      Publisher: {
        payload: Prisma.$PublisherPayload<ExtArgs>
        fields: Prisma.PublisherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PublisherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PublisherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload>
          }
          findFirst: {
            args: Prisma.PublisherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PublisherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload>
          }
          findMany: {
            args: Prisma.PublisherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload>[]
          }
          create: {
            args: Prisma.PublisherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload>
          }
          createMany: {
            args: Prisma.PublisherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PublisherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload>[]
          }
          delete: {
            args: Prisma.PublisherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload>
          }
          update: {
            args: Prisma.PublisherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload>
          }
          deleteMany: {
            args: Prisma.PublisherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PublisherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PublisherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload>
          }
          aggregate: {
            args: Prisma.PublisherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePublisher>
          }
          groupBy: {
            args: Prisma.PublisherGroupByArgs<ExtArgs>
            result: $Utils.Optional<PublisherGroupByOutputType>[]
          }
          count: {
            args: Prisma.PublisherCountArgs<ExtArgs>
            result: $Utils.Optional<PublisherCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BookCountOutputType
   */

  export type BookCountOutputType = {
    genres: number
    loans: number
  }

  export type BookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genres?: boolean | BookCountOutputTypeCountGenresArgs
    loans?: boolean | BookCountOutputTypeCountLoansArgs
  }

  // Custom InputTypes
  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCountOutputType
     */
    select?: BookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountGenresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookGenreWhereInput
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountLoansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoanWhereInput
  }


  /**
   * Count Type AuthorCountOutputType
   */

  export type AuthorCountOutputType = {
    books: number
  }

  export type AuthorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | AuthorCountOutputTypeCountBooksArgs
  }

  // Custom InputTypes
  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorCountOutputType
     */
    select?: AuthorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeCountBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
  }


  /**
   * Count Type ReaderCountOutputType
   */

  export type ReaderCountOutputType = {
    loans: number
  }

  export type ReaderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loans?: boolean | ReaderCountOutputTypeCountLoansArgs
  }

  // Custom InputTypes
  /**
   * ReaderCountOutputType without action
   */
  export type ReaderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReaderCountOutputType
     */
    select?: ReaderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReaderCountOutputType without action
   */
  export type ReaderCountOutputTypeCountLoansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoanWhereInput
  }


  /**
   * Count Type GenreCountOutputType
   */

  export type GenreCountOutputType = {
    books: number
  }

  export type GenreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | GenreCountOutputTypeCountBooksArgs
  }

  // Custom InputTypes
  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreCountOutputType
     */
    select?: GenreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeCountBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookGenreWhereInput
  }


  /**
   * Count Type PublisherCountOutputType
   */

  export type PublisherCountOutputType = {
    books: number
  }

  export type PublisherCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | PublisherCountOutputTypeCountBooksArgs
  }

  // Custom InputTypes
  /**
   * PublisherCountOutputType without action
   */
  export type PublisherCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublisherCountOutputType
     */
    select?: PublisherCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PublisherCountOutputType without action
   */
  export type PublisherCountOutputTypeCountBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Book
   */

  export type AggregateBook = {
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  export type BookAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
    publisherId: number | null
    year: number | null
  }

  export type BookSumAggregateOutputType = {
    id: number | null
    authorId: number | null
    publisherId: number | null
    year: number | null
  }

  export type BookMinAggregateOutputType = {
    id: number | null
    title: string | null
    authorId: number | null
    publisherId: number | null
    year: number | null
  }

  export type BookMaxAggregateOutputType = {
    id: number | null
    title: string | null
    authorId: number | null
    publisherId: number | null
    year: number | null
  }

  export type BookCountAggregateOutputType = {
    id: number
    title: number
    authorId: number
    publisherId: number
    year: number
    _all: number
  }


  export type BookAvgAggregateInputType = {
    id?: true
    authorId?: true
    publisherId?: true
    year?: true
  }

  export type BookSumAggregateInputType = {
    id?: true
    authorId?: true
    publisherId?: true
    year?: true
  }

  export type BookMinAggregateInputType = {
    id?: true
    title?: true
    authorId?: true
    publisherId?: true
    year?: true
  }

  export type BookMaxAggregateInputType = {
    id?: true
    title?: true
    authorId?: true
    publisherId?: true
    year?: true
  }

  export type BookCountAggregateInputType = {
    id?: true
    title?: true
    authorId?: true
    publisherId?: true
    year?: true
    _all?: true
  }

  export type BookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Book to aggregate.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Books
    **/
    _count?: true | BookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookMaxAggregateInputType
  }

  export type GetBookAggregateType<T extends BookAggregateArgs> = {
        [P in keyof T & keyof AggregateBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook[P]>
      : GetScalarType<T[P], AggregateBook[P]>
  }




  export type BookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
    orderBy?: BookOrderByWithAggregationInput | BookOrderByWithAggregationInput[]
    by: BookScalarFieldEnum[] | BookScalarFieldEnum
    having?: BookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookCountAggregateInputType | true
    _avg?: BookAvgAggregateInputType
    _sum?: BookSumAggregateInputType
    _min?: BookMinAggregateInputType
    _max?: BookMaxAggregateInputType
  }

  export type BookGroupByOutputType = {
    id: number
    title: string
    authorId: number
    publisherId: number
    year: number
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  type GetBookGroupByPayload<T extends BookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookGroupByOutputType[P]>
            : GetScalarType<T[P], BookGroupByOutputType[P]>
        }
      >
    >


  export type BookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    authorId?: boolean
    publisherId?: boolean
    year?: boolean
    author?: boolean | AuthorDefaultArgs<ExtArgs>
    publisher?: boolean | PublisherDefaultArgs<ExtArgs>
    genres?: boolean | Book$genresArgs<ExtArgs>
    loans?: boolean | Book$loansArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    authorId?: boolean
    publisherId?: boolean
    year?: boolean
    author?: boolean | AuthorDefaultArgs<ExtArgs>
    publisher?: boolean | PublisherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectScalar = {
    id?: boolean
    title?: boolean
    authorId?: boolean
    publisherId?: boolean
    year?: boolean
  }

  export type BookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | AuthorDefaultArgs<ExtArgs>
    publisher?: boolean | PublisherDefaultArgs<ExtArgs>
    genres?: boolean | Book$genresArgs<ExtArgs>
    loans?: boolean | Book$loansArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | AuthorDefaultArgs<ExtArgs>
    publisher?: boolean | PublisherDefaultArgs<ExtArgs>
  }

  export type $BookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Book"
    objects: {
      author: Prisma.$AuthorPayload<ExtArgs>
      publisher: Prisma.$PublisherPayload<ExtArgs>
      genres: Prisma.$BookGenrePayload<ExtArgs>[]
      loans: Prisma.$LoanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      authorId: number
      publisherId: number
      year: number
    }, ExtArgs["result"]["book"]>
    composites: {}
  }

  type BookGetPayload<S extends boolean | null | undefined | BookDefaultArgs> = $Result.GetResult<Prisma.$BookPayload, S>

  type BookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BookFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BookCountAggregateInputType | true
    }

  export interface BookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Book'], meta: { name: 'Book' } }
    /**
     * Find zero or one Book that matches the filter.
     * @param {BookFindUniqueArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookFindUniqueArgs>(args: SelectSubset<T, BookFindUniqueArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Book that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BookFindUniqueOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookFindUniqueOrThrowArgs>(args: SelectSubset<T, BookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Book that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookFindFirstArgs>(args?: SelectSubset<T, BookFindFirstArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Book that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookFindFirstOrThrowArgs>(args?: SelectSubset<T, BookFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.book.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.book.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookWithIdOnly = await prisma.book.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookFindManyArgs>(args?: SelectSubset<T, BookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Book.
     * @param {BookCreateArgs} args - Arguments to create a Book.
     * @example
     * // Create one Book
     * const Book = await prisma.book.create({
     *   data: {
     *     // ... data to create a Book
     *   }
     * })
     * 
     */
    create<T extends BookCreateArgs>(args: SelectSubset<T, BookCreateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Books.
     * @param {BookCreateManyArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookCreateManyArgs>(args?: SelectSubset<T, BookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Books and returns the data saved in the database.
     * @param {BookCreateManyAndReturnArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookCreateManyAndReturnArgs>(args?: SelectSubset<T, BookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Book.
     * @param {BookDeleteArgs} args - Arguments to delete one Book.
     * @example
     * // Delete one Book
     * const Book = await prisma.book.delete({
     *   where: {
     *     // ... filter to delete one Book
     *   }
     * })
     * 
     */
    delete<T extends BookDeleteArgs>(args: SelectSubset<T, BookDeleteArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Book.
     * @param {BookUpdateArgs} args - Arguments to update one Book.
     * @example
     * // Update one Book
     * const book = await prisma.book.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookUpdateArgs>(args: SelectSubset<T, BookUpdateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Books.
     * @param {BookDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.book.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookDeleteManyArgs>(args?: SelectSubset<T, BookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookUpdateManyArgs>(args: SelectSubset<T, BookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Book.
     * @param {BookUpsertArgs} args - Arguments to update or create a Book.
     * @example
     * // Update or create a Book
     * const book = await prisma.book.upsert({
     *   create: {
     *     // ... data to create a Book
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book we want to update
     *   }
     * })
     */
    upsert<T extends BookUpsertArgs>(args: SelectSubset<T, BookUpsertArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.book.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends BookCountArgs>(
      args?: Subset<T, BookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookAggregateArgs>(args: Subset<T, BookAggregateArgs>): Prisma.PrismaPromise<GetBookAggregateType<T>>

    /**
     * Group by Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookGroupByArgs['orderBy'] }
        : { orderBy?: BookGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Book model
   */
  readonly fields: BookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Book.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends AuthorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuthorDefaultArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    publisher<T extends PublisherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PublisherDefaultArgs<ExtArgs>>): Prisma__PublisherClient<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    genres<T extends Book$genresArgs<ExtArgs> = {}>(args?: Subset<T, Book$genresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookGenrePayload<ExtArgs>, T, "findMany"> | Null>
    loans<T extends Book$loansArgs<ExtArgs> = {}>(args?: Subset<T, Book$loansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Book model
   */ 
  interface BookFieldRefs {
    readonly id: FieldRef<"Book", 'Int'>
    readonly title: FieldRef<"Book", 'String'>
    readonly authorId: FieldRef<"Book", 'Int'>
    readonly publisherId: FieldRef<"Book", 'Int'>
    readonly year: FieldRef<"Book", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Book findUnique
   */
  export type BookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findUniqueOrThrow
   */
  export type BookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findFirst
   */
  export type BookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findFirstOrThrow
   */
  export type BookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findMany
   */
  export type BookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book create
   */
  export type BookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to create a Book.
     */
    data: XOR<BookCreateInput, BookUncheckedCreateInput>
  }

  /**
   * Book createMany
   */
  export type BookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Book createManyAndReturn
   */
  export type BookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Book update
   */
  export type BookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to update a Book.
     */
    data: XOR<BookUpdateInput, BookUncheckedUpdateInput>
    /**
     * Choose, which Book to update.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book updateMany
   */
  export type BookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
  }

  /**
   * Book upsert
   */
  export type BookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The filter to search for the Book to update in case it exists.
     */
    where: BookWhereUniqueInput
    /**
     * In case the Book found by the `where` argument doesn't exist, create a new Book with this data.
     */
    create: XOR<BookCreateInput, BookUncheckedCreateInput>
    /**
     * In case the Book was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookUpdateInput, BookUncheckedUpdateInput>
  }

  /**
   * Book delete
   */
  export type BookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter which Book to delete.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book deleteMany
   */
  export type BookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Books to delete
     */
    where?: BookWhereInput
  }

  /**
   * Book.genres
   */
  export type Book$genresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookGenre
     */
    select?: BookGenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookGenreInclude<ExtArgs> | null
    where?: BookGenreWhereInput
    orderBy?: BookGenreOrderByWithRelationInput | BookGenreOrderByWithRelationInput[]
    cursor?: BookGenreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookGenreScalarFieldEnum | BookGenreScalarFieldEnum[]
  }

  /**
   * Book.loans
   */
  export type Book$loansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    where?: LoanWhereInput
    orderBy?: LoanOrderByWithRelationInput | LoanOrderByWithRelationInput[]
    cursor?: LoanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[]
  }

  /**
   * Book without action
   */
  export type BookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
  }


  /**
   * Model Author
   */

  export type AggregateAuthor = {
    _count: AuthorCountAggregateOutputType | null
    _avg: AuthorAvgAggregateOutputType | null
    _sum: AuthorSumAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  export type AuthorAvgAggregateOutputType = {
    id: number | null
  }

  export type AuthorSumAggregateOutputType = {
    id: number | null
  }

  export type AuthorMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    birthDate: Date | null
    country: string | null
  }

  export type AuthorMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    birthDate: Date | null
    country: string | null
  }

  export type AuthorCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    birthDate: number
    country: number
    _all: number
  }


  export type AuthorAvgAggregateInputType = {
    id?: true
  }

  export type AuthorSumAggregateInputType = {
    id?: true
  }

  export type AuthorMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    birthDate?: true
    country?: true
  }

  export type AuthorMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    birthDate?: true
    country?: true
  }

  export type AuthorCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    birthDate?: true
    country?: true
    _all?: true
  }

  export type AuthorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Author to aggregate.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Authors
    **/
    _count?: true | AuthorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuthorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuthorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthorMaxAggregateInputType
  }

  export type GetAuthorAggregateType<T extends AuthorAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthor[P]>
      : GetScalarType<T[P], AggregateAuthor[P]>
  }




  export type AuthorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorWhereInput
    orderBy?: AuthorOrderByWithAggregationInput | AuthorOrderByWithAggregationInput[]
    by: AuthorScalarFieldEnum[] | AuthorScalarFieldEnum
    having?: AuthorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthorCountAggregateInputType | true
    _avg?: AuthorAvgAggregateInputType
    _sum?: AuthorSumAggregateInputType
    _min?: AuthorMinAggregateInputType
    _max?: AuthorMaxAggregateInputType
  }

  export type AuthorGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    birthDate: Date | null
    country: string
    _count: AuthorCountAggregateOutputType | null
    _avg: AuthorAvgAggregateOutputType | null
    _sum: AuthorSumAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  type GetAuthorGroupByPayload<T extends AuthorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthorGroupByOutputType[P]>
            : GetScalarType<T[P], AuthorGroupByOutputType[P]>
        }
      >
    >


  export type AuthorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    birthDate?: boolean
    country?: boolean
    books?: boolean | Author$booksArgs<ExtArgs>
    _count?: boolean | AuthorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["author"]>

  export type AuthorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    birthDate?: boolean
    country?: boolean
  }, ExtArgs["result"]["author"]>

  export type AuthorSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    birthDate?: boolean
    country?: boolean
  }

  export type AuthorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | Author$booksArgs<ExtArgs>
    _count?: boolean | AuthorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AuthorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AuthorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Author"
    objects: {
      books: Prisma.$BookPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      birthDate: Date | null
      country: string
    }, ExtArgs["result"]["author"]>
    composites: {}
  }

  type AuthorGetPayload<S extends boolean | null | undefined | AuthorDefaultArgs> = $Result.GetResult<Prisma.$AuthorPayload, S>

  type AuthorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AuthorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AuthorCountAggregateInputType | true
    }

  export interface AuthorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Author'], meta: { name: 'Author' } }
    /**
     * Find zero or one Author that matches the filter.
     * @param {AuthorFindUniqueArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthorFindUniqueArgs>(args: SelectSubset<T, AuthorFindUniqueArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Author that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AuthorFindUniqueOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthorFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Author that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindFirstArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthorFindFirstArgs>(args?: SelectSubset<T, AuthorFindFirstArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Author that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindFirstOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthorFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthorFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Authors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authors
     * const authors = await prisma.author.findMany()
     * 
     * // Get first 10 Authors
     * const authors = await prisma.author.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authorWithIdOnly = await prisma.author.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthorFindManyArgs>(args?: SelectSubset<T, AuthorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Author.
     * @param {AuthorCreateArgs} args - Arguments to create a Author.
     * @example
     * // Create one Author
     * const Author = await prisma.author.create({
     *   data: {
     *     // ... data to create a Author
     *   }
     * })
     * 
     */
    create<T extends AuthorCreateArgs>(args: SelectSubset<T, AuthorCreateArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Authors.
     * @param {AuthorCreateManyArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const author = await prisma.author.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthorCreateManyArgs>(args?: SelectSubset<T, AuthorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Authors and returns the data saved in the database.
     * @param {AuthorCreateManyAndReturnArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const author = await prisma.author.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Authors and only return the `id`
     * const authorWithIdOnly = await prisma.author.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthorCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Author.
     * @param {AuthorDeleteArgs} args - Arguments to delete one Author.
     * @example
     * // Delete one Author
     * const Author = await prisma.author.delete({
     *   where: {
     *     // ... filter to delete one Author
     *   }
     * })
     * 
     */
    delete<T extends AuthorDeleteArgs>(args: SelectSubset<T, AuthorDeleteArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Author.
     * @param {AuthorUpdateArgs} args - Arguments to update one Author.
     * @example
     * // Update one Author
     * const author = await prisma.author.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthorUpdateArgs>(args: SelectSubset<T, AuthorUpdateArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Authors.
     * @param {AuthorDeleteManyArgs} args - Arguments to filter Authors to delete.
     * @example
     * // Delete a few Authors
     * const { count } = await prisma.author.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthorDeleteManyArgs>(args?: SelectSubset<T, AuthorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authors
     * const author = await prisma.author.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthorUpdateManyArgs>(args: SelectSubset<T, AuthorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Author.
     * @param {AuthorUpsertArgs} args - Arguments to update or create a Author.
     * @example
     * // Update or create a Author
     * const author = await prisma.author.upsert({
     *   create: {
     *     // ... data to create a Author
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Author we want to update
     *   }
     * })
     */
    upsert<T extends AuthorUpsertArgs>(args: SelectSubset<T, AuthorUpsertArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorCountArgs} args - Arguments to filter Authors to count.
     * @example
     * // Count the number of Authors
     * const count = await prisma.author.count({
     *   where: {
     *     // ... the filter for the Authors we want to count
     *   }
     * })
    **/
    count<T extends AuthorCountArgs>(
      args?: Subset<T, AuthorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthorAggregateArgs>(args: Subset<T, AuthorAggregateArgs>): Prisma.PrismaPromise<GetAuthorAggregateType<T>>

    /**
     * Group by Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuthorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthorGroupByArgs['orderBy'] }
        : { orderBy?: AuthorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuthorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Author model
   */
  readonly fields: AuthorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Author.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    books<T extends Author$booksArgs<ExtArgs> = {}>(args?: Subset<T, Author$booksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Author model
   */ 
  interface AuthorFieldRefs {
    readonly id: FieldRef<"Author", 'Int'>
    readonly firstName: FieldRef<"Author", 'String'>
    readonly lastName: FieldRef<"Author", 'String'>
    readonly birthDate: FieldRef<"Author", 'DateTime'>
    readonly country: FieldRef<"Author", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Author findUnique
   */
  export type AuthorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author findUniqueOrThrow
   */
  export type AuthorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author findFirst
   */
  export type AuthorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * Author findFirstOrThrow
   */
  export type AuthorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * Author findMany
   */
  export type AuthorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Authors to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * Author create
   */
  export type AuthorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The data needed to create a Author.
     */
    data: XOR<AuthorCreateInput, AuthorUncheckedCreateInput>
  }

  /**
   * Author createMany
   */
  export type AuthorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Authors.
     */
    data: AuthorCreateManyInput | AuthorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Author createManyAndReturn
   */
  export type AuthorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Authors.
     */
    data: AuthorCreateManyInput | AuthorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Author update
   */
  export type AuthorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The data needed to update a Author.
     */
    data: XOR<AuthorUpdateInput, AuthorUncheckedUpdateInput>
    /**
     * Choose, which Author to update.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author updateMany
   */
  export type AuthorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Authors.
     */
    data: XOR<AuthorUpdateManyMutationInput, AuthorUncheckedUpdateManyInput>
    /**
     * Filter which Authors to update
     */
    where?: AuthorWhereInput
  }

  /**
   * Author upsert
   */
  export type AuthorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The filter to search for the Author to update in case it exists.
     */
    where: AuthorWhereUniqueInput
    /**
     * In case the Author found by the `where` argument doesn't exist, create a new Author with this data.
     */
    create: XOR<AuthorCreateInput, AuthorUncheckedCreateInput>
    /**
     * In case the Author was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthorUpdateInput, AuthorUncheckedUpdateInput>
  }

  /**
   * Author delete
   */
  export type AuthorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter which Author to delete.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author deleteMany
   */
  export type AuthorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Authors to delete
     */
    where?: AuthorWhereInput
  }

  /**
   * Author.books
   */
  export type Author$booksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    where?: BookWhereInput
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    cursor?: BookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Author without action
   */
  export type AuthorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
  }


  /**
   * Model Reader
   */

  export type AggregateReader = {
    _count: ReaderCountAggregateOutputType | null
    _avg: ReaderAvgAggregateOutputType | null
    _sum: ReaderSumAggregateOutputType | null
    _min: ReaderMinAggregateOutputType | null
    _max: ReaderMaxAggregateOutputType | null
  }

  export type ReaderAvgAggregateOutputType = {
    id: number | null
  }

  export type ReaderSumAggregateOutputType = {
    id: number | null
  }

  export type ReaderMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    address: string | null
    phone: string | null
    registrationDate: Date | null
  }

  export type ReaderMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    address: string | null
    phone: string | null
    registrationDate: Date | null
  }

  export type ReaderCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    address: number
    phone: number
    registrationDate: number
    _all: number
  }


  export type ReaderAvgAggregateInputType = {
    id?: true
  }

  export type ReaderSumAggregateInputType = {
    id?: true
  }

  export type ReaderMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    address?: true
    phone?: true
    registrationDate?: true
  }

  export type ReaderMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    address?: true
    phone?: true
    registrationDate?: true
  }

  export type ReaderCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    address?: true
    phone?: true
    registrationDate?: true
    _all?: true
  }

  export type ReaderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reader to aggregate.
     */
    where?: ReaderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Readers to fetch.
     */
    orderBy?: ReaderOrderByWithRelationInput | ReaderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReaderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Readers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Readers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Readers
    **/
    _count?: true | ReaderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReaderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReaderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReaderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReaderMaxAggregateInputType
  }

  export type GetReaderAggregateType<T extends ReaderAggregateArgs> = {
        [P in keyof T & keyof AggregateReader]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReader[P]>
      : GetScalarType<T[P], AggregateReader[P]>
  }




  export type ReaderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReaderWhereInput
    orderBy?: ReaderOrderByWithAggregationInput | ReaderOrderByWithAggregationInput[]
    by: ReaderScalarFieldEnum[] | ReaderScalarFieldEnum
    having?: ReaderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReaderCountAggregateInputType | true
    _avg?: ReaderAvgAggregateInputType
    _sum?: ReaderSumAggregateInputType
    _min?: ReaderMinAggregateInputType
    _max?: ReaderMaxAggregateInputType
  }

  export type ReaderGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    address: string
    phone: string
    registrationDate: Date
    _count: ReaderCountAggregateOutputType | null
    _avg: ReaderAvgAggregateOutputType | null
    _sum: ReaderSumAggregateOutputType | null
    _min: ReaderMinAggregateOutputType | null
    _max: ReaderMaxAggregateOutputType | null
  }

  type GetReaderGroupByPayload<T extends ReaderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReaderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReaderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReaderGroupByOutputType[P]>
            : GetScalarType<T[P], ReaderGroupByOutputType[P]>
        }
      >
    >


  export type ReaderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    address?: boolean
    phone?: boolean
    registrationDate?: boolean
    loans?: boolean | Reader$loansArgs<ExtArgs>
    _count?: boolean | ReaderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reader"]>

  export type ReaderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    address?: boolean
    phone?: boolean
    registrationDate?: boolean
  }, ExtArgs["result"]["reader"]>

  export type ReaderSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    address?: boolean
    phone?: boolean
    registrationDate?: boolean
  }

  export type ReaderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loans?: boolean | Reader$loansArgs<ExtArgs>
    _count?: boolean | ReaderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReaderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ReaderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reader"
    objects: {
      loans: Prisma.$LoanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      address: string
      phone: string
      registrationDate: Date
    }, ExtArgs["result"]["reader"]>
    composites: {}
  }

  type ReaderGetPayload<S extends boolean | null | undefined | ReaderDefaultArgs> = $Result.GetResult<Prisma.$ReaderPayload, S>

  type ReaderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReaderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReaderCountAggregateInputType | true
    }

  export interface ReaderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reader'], meta: { name: 'Reader' } }
    /**
     * Find zero or one Reader that matches the filter.
     * @param {ReaderFindUniqueArgs} args - Arguments to find a Reader
     * @example
     * // Get one Reader
     * const reader = await prisma.reader.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReaderFindUniqueArgs>(args: SelectSubset<T, ReaderFindUniqueArgs<ExtArgs>>): Prisma__ReaderClient<$Result.GetResult<Prisma.$ReaderPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Reader that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReaderFindUniqueOrThrowArgs} args - Arguments to find a Reader
     * @example
     * // Get one Reader
     * const reader = await prisma.reader.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReaderFindUniqueOrThrowArgs>(args: SelectSubset<T, ReaderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReaderClient<$Result.GetResult<Prisma.$ReaderPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Reader that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReaderFindFirstArgs} args - Arguments to find a Reader
     * @example
     * // Get one Reader
     * const reader = await prisma.reader.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReaderFindFirstArgs>(args?: SelectSubset<T, ReaderFindFirstArgs<ExtArgs>>): Prisma__ReaderClient<$Result.GetResult<Prisma.$ReaderPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Reader that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReaderFindFirstOrThrowArgs} args - Arguments to find a Reader
     * @example
     * // Get one Reader
     * const reader = await prisma.reader.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReaderFindFirstOrThrowArgs>(args?: SelectSubset<T, ReaderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReaderClient<$Result.GetResult<Prisma.$ReaderPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Readers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReaderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Readers
     * const readers = await prisma.reader.findMany()
     * 
     * // Get first 10 Readers
     * const readers = await prisma.reader.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const readerWithIdOnly = await prisma.reader.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReaderFindManyArgs>(args?: SelectSubset<T, ReaderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReaderPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Reader.
     * @param {ReaderCreateArgs} args - Arguments to create a Reader.
     * @example
     * // Create one Reader
     * const Reader = await prisma.reader.create({
     *   data: {
     *     // ... data to create a Reader
     *   }
     * })
     * 
     */
    create<T extends ReaderCreateArgs>(args: SelectSubset<T, ReaderCreateArgs<ExtArgs>>): Prisma__ReaderClient<$Result.GetResult<Prisma.$ReaderPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Readers.
     * @param {ReaderCreateManyArgs} args - Arguments to create many Readers.
     * @example
     * // Create many Readers
     * const reader = await prisma.reader.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReaderCreateManyArgs>(args?: SelectSubset<T, ReaderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Readers and returns the data saved in the database.
     * @param {ReaderCreateManyAndReturnArgs} args - Arguments to create many Readers.
     * @example
     * // Create many Readers
     * const reader = await prisma.reader.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Readers and only return the `id`
     * const readerWithIdOnly = await prisma.reader.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReaderCreateManyAndReturnArgs>(args?: SelectSubset<T, ReaderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReaderPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Reader.
     * @param {ReaderDeleteArgs} args - Arguments to delete one Reader.
     * @example
     * // Delete one Reader
     * const Reader = await prisma.reader.delete({
     *   where: {
     *     // ... filter to delete one Reader
     *   }
     * })
     * 
     */
    delete<T extends ReaderDeleteArgs>(args: SelectSubset<T, ReaderDeleteArgs<ExtArgs>>): Prisma__ReaderClient<$Result.GetResult<Prisma.$ReaderPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Reader.
     * @param {ReaderUpdateArgs} args - Arguments to update one Reader.
     * @example
     * // Update one Reader
     * const reader = await prisma.reader.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReaderUpdateArgs>(args: SelectSubset<T, ReaderUpdateArgs<ExtArgs>>): Prisma__ReaderClient<$Result.GetResult<Prisma.$ReaderPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Readers.
     * @param {ReaderDeleteManyArgs} args - Arguments to filter Readers to delete.
     * @example
     * // Delete a few Readers
     * const { count } = await prisma.reader.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReaderDeleteManyArgs>(args?: SelectSubset<T, ReaderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Readers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReaderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Readers
     * const reader = await prisma.reader.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReaderUpdateManyArgs>(args: SelectSubset<T, ReaderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reader.
     * @param {ReaderUpsertArgs} args - Arguments to update or create a Reader.
     * @example
     * // Update or create a Reader
     * const reader = await prisma.reader.upsert({
     *   create: {
     *     // ... data to create a Reader
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reader we want to update
     *   }
     * })
     */
    upsert<T extends ReaderUpsertArgs>(args: SelectSubset<T, ReaderUpsertArgs<ExtArgs>>): Prisma__ReaderClient<$Result.GetResult<Prisma.$ReaderPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Readers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReaderCountArgs} args - Arguments to filter Readers to count.
     * @example
     * // Count the number of Readers
     * const count = await prisma.reader.count({
     *   where: {
     *     // ... the filter for the Readers we want to count
     *   }
     * })
    **/
    count<T extends ReaderCountArgs>(
      args?: Subset<T, ReaderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReaderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reader.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReaderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReaderAggregateArgs>(args: Subset<T, ReaderAggregateArgs>): Prisma.PrismaPromise<GetReaderAggregateType<T>>

    /**
     * Group by Reader.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReaderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReaderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReaderGroupByArgs['orderBy'] }
        : { orderBy?: ReaderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReaderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReaderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reader model
   */
  readonly fields: ReaderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reader.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReaderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    loans<T extends Reader$loansArgs<ExtArgs> = {}>(args?: Subset<T, Reader$loansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reader model
   */ 
  interface ReaderFieldRefs {
    readonly id: FieldRef<"Reader", 'Int'>
    readonly firstName: FieldRef<"Reader", 'String'>
    readonly lastName: FieldRef<"Reader", 'String'>
    readonly address: FieldRef<"Reader", 'String'>
    readonly phone: FieldRef<"Reader", 'String'>
    readonly registrationDate: FieldRef<"Reader", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reader findUnique
   */
  export type ReaderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reader
     */
    select?: ReaderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReaderInclude<ExtArgs> | null
    /**
     * Filter, which Reader to fetch.
     */
    where: ReaderWhereUniqueInput
  }

  /**
   * Reader findUniqueOrThrow
   */
  export type ReaderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reader
     */
    select?: ReaderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReaderInclude<ExtArgs> | null
    /**
     * Filter, which Reader to fetch.
     */
    where: ReaderWhereUniqueInput
  }

  /**
   * Reader findFirst
   */
  export type ReaderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reader
     */
    select?: ReaderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReaderInclude<ExtArgs> | null
    /**
     * Filter, which Reader to fetch.
     */
    where?: ReaderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Readers to fetch.
     */
    orderBy?: ReaderOrderByWithRelationInput | ReaderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Readers.
     */
    cursor?: ReaderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Readers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Readers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Readers.
     */
    distinct?: ReaderScalarFieldEnum | ReaderScalarFieldEnum[]
  }

  /**
   * Reader findFirstOrThrow
   */
  export type ReaderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reader
     */
    select?: ReaderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReaderInclude<ExtArgs> | null
    /**
     * Filter, which Reader to fetch.
     */
    where?: ReaderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Readers to fetch.
     */
    orderBy?: ReaderOrderByWithRelationInput | ReaderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Readers.
     */
    cursor?: ReaderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Readers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Readers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Readers.
     */
    distinct?: ReaderScalarFieldEnum | ReaderScalarFieldEnum[]
  }

  /**
   * Reader findMany
   */
  export type ReaderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reader
     */
    select?: ReaderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReaderInclude<ExtArgs> | null
    /**
     * Filter, which Readers to fetch.
     */
    where?: ReaderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Readers to fetch.
     */
    orderBy?: ReaderOrderByWithRelationInput | ReaderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Readers.
     */
    cursor?: ReaderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Readers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Readers.
     */
    skip?: number
    distinct?: ReaderScalarFieldEnum | ReaderScalarFieldEnum[]
  }

  /**
   * Reader create
   */
  export type ReaderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reader
     */
    select?: ReaderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReaderInclude<ExtArgs> | null
    /**
     * The data needed to create a Reader.
     */
    data: XOR<ReaderCreateInput, ReaderUncheckedCreateInput>
  }

  /**
   * Reader createMany
   */
  export type ReaderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Readers.
     */
    data: ReaderCreateManyInput | ReaderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reader createManyAndReturn
   */
  export type ReaderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reader
     */
    select?: ReaderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Readers.
     */
    data: ReaderCreateManyInput | ReaderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reader update
   */
  export type ReaderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reader
     */
    select?: ReaderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReaderInclude<ExtArgs> | null
    /**
     * The data needed to update a Reader.
     */
    data: XOR<ReaderUpdateInput, ReaderUncheckedUpdateInput>
    /**
     * Choose, which Reader to update.
     */
    where: ReaderWhereUniqueInput
  }

  /**
   * Reader updateMany
   */
  export type ReaderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Readers.
     */
    data: XOR<ReaderUpdateManyMutationInput, ReaderUncheckedUpdateManyInput>
    /**
     * Filter which Readers to update
     */
    where?: ReaderWhereInput
  }

  /**
   * Reader upsert
   */
  export type ReaderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reader
     */
    select?: ReaderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReaderInclude<ExtArgs> | null
    /**
     * The filter to search for the Reader to update in case it exists.
     */
    where: ReaderWhereUniqueInput
    /**
     * In case the Reader found by the `where` argument doesn't exist, create a new Reader with this data.
     */
    create: XOR<ReaderCreateInput, ReaderUncheckedCreateInput>
    /**
     * In case the Reader was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReaderUpdateInput, ReaderUncheckedUpdateInput>
  }

  /**
   * Reader delete
   */
  export type ReaderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reader
     */
    select?: ReaderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReaderInclude<ExtArgs> | null
    /**
     * Filter which Reader to delete.
     */
    where: ReaderWhereUniqueInput
  }

  /**
   * Reader deleteMany
   */
  export type ReaderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Readers to delete
     */
    where?: ReaderWhereInput
  }

  /**
   * Reader.loans
   */
  export type Reader$loansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    where?: LoanWhereInput
    orderBy?: LoanOrderByWithRelationInput | LoanOrderByWithRelationInput[]
    cursor?: LoanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[]
  }

  /**
   * Reader without action
   */
  export type ReaderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reader
     */
    select?: ReaderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReaderInclude<ExtArgs> | null
  }


  /**
   * Model Loan
   */

  export type AggregateLoan = {
    _count: LoanCountAggregateOutputType | null
    _avg: LoanAvgAggregateOutputType | null
    _sum: LoanSumAggregateOutputType | null
    _min: LoanMinAggregateOutputType | null
    _max: LoanMaxAggregateOutputType | null
  }

  export type LoanAvgAggregateOutputType = {
    id: number | null
    readerId: number | null
    bookId: number | null
  }

  export type LoanSumAggregateOutputType = {
    id: number | null
    readerId: number | null
    bookId: number | null
  }

  export type LoanMinAggregateOutputType = {
    id: number | null
    readerId: number | null
    bookId: number | null
    issueDate: Date | null
    returnDate: Date | null
    status: $Enums.LoanStatus | null
  }

  export type LoanMaxAggregateOutputType = {
    id: number | null
    readerId: number | null
    bookId: number | null
    issueDate: Date | null
    returnDate: Date | null
    status: $Enums.LoanStatus | null
  }

  export type LoanCountAggregateOutputType = {
    id: number
    readerId: number
    bookId: number
    issueDate: number
    returnDate: number
    status: number
    _all: number
  }


  export type LoanAvgAggregateInputType = {
    id?: true
    readerId?: true
    bookId?: true
  }

  export type LoanSumAggregateInputType = {
    id?: true
    readerId?: true
    bookId?: true
  }

  export type LoanMinAggregateInputType = {
    id?: true
    readerId?: true
    bookId?: true
    issueDate?: true
    returnDate?: true
    status?: true
  }

  export type LoanMaxAggregateInputType = {
    id?: true
    readerId?: true
    bookId?: true
    issueDate?: true
    returnDate?: true
    status?: true
  }

  export type LoanCountAggregateInputType = {
    id?: true
    readerId?: true
    bookId?: true
    issueDate?: true
    returnDate?: true
    status?: true
    _all?: true
  }

  export type LoanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Loan to aggregate.
     */
    where?: LoanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Loans to fetch.
     */
    orderBy?: LoanOrderByWithRelationInput | LoanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Loans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Loans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Loans
    **/
    _count?: true | LoanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LoanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LoanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoanMaxAggregateInputType
  }

  export type GetLoanAggregateType<T extends LoanAggregateArgs> = {
        [P in keyof T & keyof AggregateLoan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoan[P]>
      : GetScalarType<T[P], AggregateLoan[P]>
  }




  export type LoanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoanWhereInput
    orderBy?: LoanOrderByWithAggregationInput | LoanOrderByWithAggregationInput[]
    by: LoanScalarFieldEnum[] | LoanScalarFieldEnum
    having?: LoanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoanCountAggregateInputType | true
    _avg?: LoanAvgAggregateInputType
    _sum?: LoanSumAggregateInputType
    _min?: LoanMinAggregateInputType
    _max?: LoanMaxAggregateInputType
  }

  export type LoanGroupByOutputType = {
    id: number
    readerId: number
    bookId: number
    issueDate: Date
    returnDate: Date | null
    status: $Enums.LoanStatus
    _count: LoanCountAggregateOutputType | null
    _avg: LoanAvgAggregateOutputType | null
    _sum: LoanSumAggregateOutputType | null
    _min: LoanMinAggregateOutputType | null
    _max: LoanMaxAggregateOutputType | null
  }

  type GetLoanGroupByPayload<T extends LoanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoanGroupByOutputType[P]>
            : GetScalarType<T[P], LoanGroupByOutputType[P]>
        }
      >
    >


  export type LoanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    readerId?: boolean
    bookId?: boolean
    issueDate?: boolean
    returnDate?: boolean
    status?: boolean
    reader?: boolean | ReaderDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loan"]>

  export type LoanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    readerId?: boolean
    bookId?: boolean
    issueDate?: boolean
    returnDate?: boolean
    status?: boolean
    reader?: boolean | ReaderDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loan"]>

  export type LoanSelectScalar = {
    id?: boolean
    readerId?: boolean
    bookId?: boolean
    issueDate?: boolean
    returnDate?: boolean
    status?: boolean
  }

  export type LoanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reader?: boolean | ReaderDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type LoanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reader?: boolean | ReaderDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }

  export type $LoanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Loan"
    objects: {
      reader: Prisma.$ReaderPayload<ExtArgs>
      book: Prisma.$BookPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      readerId: number
      bookId: number
      issueDate: Date
      returnDate: Date | null
      status: $Enums.LoanStatus
    }, ExtArgs["result"]["loan"]>
    composites: {}
  }

  type LoanGetPayload<S extends boolean | null | undefined | LoanDefaultArgs> = $Result.GetResult<Prisma.$LoanPayload, S>

  type LoanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LoanFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LoanCountAggregateInputType | true
    }

  export interface LoanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Loan'], meta: { name: 'Loan' } }
    /**
     * Find zero or one Loan that matches the filter.
     * @param {LoanFindUniqueArgs} args - Arguments to find a Loan
     * @example
     * // Get one Loan
     * const loan = await prisma.loan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoanFindUniqueArgs>(args: SelectSubset<T, LoanFindUniqueArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Loan that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LoanFindUniqueOrThrowArgs} args - Arguments to find a Loan
     * @example
     * // Get one Loan
     * const loan = await prisma.loan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoanFindUniqueOrThrowArgs>(args: SelectSubset<T, LoanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Loan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanFindFirstArgs} args - Arguments to find a Loan
     * @example
     * // Get one Loan
     * const loan = await prisma.loan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoanFindFirstArgs>(args?: SelectSubset<T, LoanFindFirstArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Loan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanFindFirstOrThrowArgs} args - Arguments to find a Loan
     * @example
     * // Get one Loan
     * const loan = await prisma.loan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoanFindFirstOrThrowArgs>(args?: SelectSubset<T, LoanFindFirstOrThrowArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Loans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Loans
     * const loans = await prisma.loan.findMany()
     * 
     * // Get first 10 Loans
     * const loans = await prisma.loan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loanWithIdOnly = await prisma.loan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LoanFindManyArgs>(args?: SelectSubset<T, LoanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Loan.
     * @param {LoanCreateArgs} args - Arguments to create a Loan.
     * @example
     * // Create one Loan
     * const Loan = await prisma.loan.create({
     *   data: {
     *     // ... data to create a Loan
     *   }
     * })
     * 
     */
    create<T extends LoanCreateArgs>(args: SelectSubset<T, LoanCreateArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Loans.
     * @param {LoanCreateManyArgs} args - Arguments to create many Loans.
     * @example
     * // Create many Loans
     * const loan = await prisma.loan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LoanCreateManyArgs>(args?: SelectSubset<T, LoanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Loans and returns the data saved in the database.
     * @param {LoanCreateManyAndReturnArgs} args - Arguments to create many Loans.
     * @example
     * // Create many Loans
     * const loan = await prisma.loan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Loans and only return the `id`
     * const loanWithIdOnly = await prisma.loan.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LoanCreateManyAndReturnArgs>(args?: SelectSubset<T, LoanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Loan.
     * @param {LoanDeleteArgs} args - Arguments to delete one Loan.
     * @example
     * // Delete one Loan
     * const Loan = await prisma.loan.delete({
     *   where: {
     *     // ... filter to delete one Loan
     *   }
     * })
     * 
     */
    delete<T extends LoanDeleteArgs>(args: SelectSubset<T, LoanDeleteArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Loan.
     * @param {LoanUpdateArgs} args - Arguments to update one Loan.
     * @example
     * // Update one Loan
     * const loan = await prisma.loan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LoanUpdateArgs>(args: SelectSubset<T, LoanUpdateArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Loans.
     * @param {LoanDeleteManyArgs} args - Arguments to filter Loans to delete.
     * @example
     * // Delete a few Loans
     * const { count } = await prisma.loan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LoanDeleteManyArgs>(args?: SelectSubset<T, LoanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Loans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Loans
     * const loan = await prisma.loan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LoanUpdateManyArgs>(args: SelectSubset<T, LoanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Loan.
     * @param {LoanUpsertArgs} args - Arguments to update or create a Loan.
     * @example
     * // Update or create a Loan
     * const loan = await prisma.loan.upsert({
     *   create: {
     *     // ... data to create a Loan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Loan we want to update
     *   }
     * })
     */
    upsert<T extends LoanUpsertArgs>(args: SelectSubset<T, LoanUpsertArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Loans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanCountArgs} args - Arguments to filter Loans to count.
     * @example
     * // Count the number of Loans
     * const count = await prisma.loan.count({
     *   where: {
     *     // ... the filter for the Loans we want to count
     *   }
     * })
    **/
    count<T extends LoanCountArgs>(
      args?: Subset<T, LoanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Loan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LoanAggregateArgs>(args: Subset<T, LoanAggregateArgs>): Prisma.PrismaPromise<GetLoanAggregateType<T>>

    /**
     * Group by Loan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LoanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoanGroupByArgs['orderBy'] }
        : { orderBy?: LoanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LoanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Loan model
   */
  readonly fields: LoanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Loan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LoanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reader<T extends ReaderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReaderDefaultArgs<ExtArgs>>): Prisma__ReaderClient<$Result.GetResult<Prisma.$ReaderPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Loan model
   */ 
  interface LoanFieldRefs {
    readonly id: FieldRef<"Loan", 'Int'>
    readonly readerId: FieldRef<"Loan", 'Int'>
    readonly bookId: FieldRef<"Loan", 'Int'>
    readonly issueDate: FieldRef<"Loan", 'DateTime'>
    readonly returnDate: FieldRef<"Loan", 'DateTime'>
    readonly status: FieldRef<"Loan", 'LoanStatus'>
  }
    

  // Custom InputTypes
  /**
   * Loan findUnique
   */
  export type LoanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * Filter, which Loan to fetch.
     */
    where: LoanWhereUniqueInput
  }

  /**
   * Loan findUniqueOrThrow
   */
  export type LoanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * Filter, which Loan to fetch.
     */
    where: LoanWhereUniqueInput
  }

  /**
   * Loan findFirst
   */
  export type LoanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * Filter, which Loan to fetch.
     */
    where?: LoanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Loans to fetch.
     */
    orderBy?: LoanOrderByWithRelationInput | LoanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Loans.
     */
    cursor?: LoanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Loans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Loans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Loans.
     */
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[]
  }

  /**
   * Loan findFirstOrThrow
   */
  export type LoanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * Filter, which Loan to fetch.
     */
    where?: LoanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Loans to fetch.
     */
    orderBy?: LoanOrderByWithRelationInput | LoanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Loans.
     */
    cursor?: LoanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Loans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Loans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Loans.
     */
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[]
  }

  /**
   * Loan findMany
   */
  export type LoanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * Filter, which Loans to fetch.
     */
    where?: LoanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Loans to fetch.
     */
    orderBy?: LoanOrderByWithRelationInput | LoanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Loans.
     */
    cursor?: LoanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Loans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Loans.
     */
    skip?: number
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[]
  }

  /**
   * Loan create
   */
  export type LoanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * The data needed to create a Loan.
     */
    data: XOR<LoanCreateInput, LoanUncheckedCreateInput>
  }

  /**
   * Loan createMany
   */
  export type LoanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Loans.
     */
    data: LoanCreateManyInput | LoanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Loan createManyAndReturn
   */
  export type LoanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Loans.
     */
    data: LoanCreateManyInput | LoanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Loan update
   */
  export type LoanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * The data needed to update a Loan.
     */
    data: XOR<LoanUpdateInput, LoanUncheckedUpdateInput>
    /**
     * Choose, which Loan to update.
     */
    where: LoanWhereUniqueInput
  }

  /**
   * Loan updateMany
   */
  export type LoanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Loans.
     */
    data: XOR<LoanUpdateManyMutationInput, LoanUncheckedUpdateManyInput>
    /**
     * Filter which Loans to update
     */
    where?: LoanWhereInput
  }

  /**
   * Loan upsert
   */
  export type LoanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * The filter to search for the Loan to update in case it exists.
     */
    where: LoanWhereUniqueInput
    /**
     * In case the Loan found by the `where` argument doesn't exist, create a new Loan with this data.
     */
    create: XOR<LoanCreateInput, LoanUncheckedCreateInput>
    /**
     * In case the Loan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LoanUpdateInput, LoanUncheckedUpdateInput>
  }

  /**
   * Loan delete
   */
  export type LoanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * Filter which Loan to delete.
     */
    where: LoanWhereUniqueInput
  }

  /**
   * Loan deleteMany
   */
  export type LoanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Loans to delete
     */
    where?: LoanWhereInput
  }

  /**
   * Loan without action
   */
  export type LoanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
  }


  /**
   * Model Genre
   */

  export type AggregateGenre = {
    _count: GenreCountAggregateOutputType | null
    _avg: GenreAvgAggregateOutputType | null
    _sum: GenreSumAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  export type GenreAvgAggregateOutputType = {
    id: number | null
  }

  export type GenreSumAggregateOutputType = {
    id: number | null
  }

  export type GenreMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type GenreMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type GenreCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type GenreAvgAggregateInputType = {
    id?: true
  }

  export type GenreSumAggregateInputType = {
    id?: true
  }

  export type GenreMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type GenreMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type GenreCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type GenreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genre to aggregate.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Genres
    **/
    _count?: true | GenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GenreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GenreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenreMaxAggregateInputType
  }

  export type GetGenreAggregateType<T extends GenreAggregateArgs> = {
        [P in keyof T & keyof AggregateGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenre[P]>
      : GetScalarType<T[P], AggregateGenre[P]>
  }




  export type GenreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenreWhereInput
    orderBy?: GenreOrderByWithAggregationInput | GenreOrderByWithAggregationInput[]
    by: GenreScalarFieldEnum[] | GenreScalarFieldEnum
    having?: GenreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenreCountAggregateInputType | true
    _avg?: GenreAvgAggregateInputType
    _sum?: GenreSumAggregateInputType
    _min?: GenreMinAggregateInputType
    _max?: GenreMaxAggregateInputType
  }

  export type GenreGroupByOutputType = {
    id: number
    name: string
    _count: GenreCountAggregateOutputType | null
    _avg: GenreAvgAggregateOutputType | null
    _sum: GenreSumAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  type GetGenreGroupByPayload<T extends GenreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenreGroupByOutputType[P]>
            : GetScalarType<T[P], GenreGroupByOutputType[P]>
        }
      >
    >


  export type GenreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    books?: boolean | Genre$booksArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type GenreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | Genre$booksArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GenreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GenrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Genre"
    objects: {
      books: Prisma.$BookGenrePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["genre"]>
    composites: {}
  }

  type GenreGetPayload<S extends boolean | null | undefined | GenreDefaultArgs> = $Result.GetResult<Prisma.$GenrePayload, S>

  type GenreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GenreFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GenreCountAggregateInputType | true
    }

  export interface GenreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Genre'], meta: { name: 'Genre' } }
    /**
     * Find zero or one Genre that matches the filter.
     * @param {GenreFindUniqueArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GenreFindUniqueArgs>(args: SelectSubset<T, GenreFindUniqueArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Genre that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GenreFindUniqueOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GenreFindUniqueOrThrowArgs>(args: SelectSubset<T, GenreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Genre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GenreFindFirstArgs>(args?: SelectSubset<T, GenreFindFirstArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Genre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GenreFindFirstOrThrowArgs>(args?: SelectSubset<T, GenreFindFirstOrThrowArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genre.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genre.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const genreWithIdOnly = await prisma.genre.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GenreFindManyArgs>(args?: SelectSubset<T, GenreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Genre.
     * @param {GenreCreateArgs} args - Arguments to create a Genre.
     * @example
     * // Create one Genre
     * const Genre = await prisma.genre.create({
     *   data: {
     *     // ... data to create a Genre
     *   }
     * })
     * 
     */
    create<T extends GenreCreateArgs>(args: SelectSubset<T, GenreCreateArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Genres.
     * @param {GenreCreateManyArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genre = await prisma.genre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GenreCreateManyArgs>(args?: SelectSubset<T, GenreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Genres and returns the data saved in the database.
     * @param {GenreCreateManyAndReturnArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genre = await prisma.genre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Genres and only return the `id`
     * const genreWithIdOnly = await prisma.genre.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GenreCreateManyAndReturnArgs>(args?: SelectSubset<T, GenreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Genre.
     * @param {GenreDeleteArgs} args - Arguments to delete one Genre.
     * @example
     * // Delete one Genre
     * const Genre = await prisma.genre.delete({
     *   where: {
     *     // ... filter to delete one Genre
     *   }
     * })
     * 
     */
    delete<T extends GenreDeleteArgs>(args: SelectSubset<T, GenreDeleteArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Genre.
     * @param {GenreUpdateArgs} args - Arguments to update one Genre.
     * @example
     * // Update one Genre
     * const genre = await prisma.genre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GenreUpdateArgs>(args: SelectSubset<T, GenreUpdateArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Genres.
     * @param {GenreDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GenreDeleteManyArgs>(args?: SelectSubset<T, GenreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GenreUpdateManyArgs>(args: SelectSubset<T, GenreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Genre.
     * @param {GenreUpsertArgs} args - Arguments to update or create a Genre.
     * @example
     * // Update or create a Genre
     * const genre = await prisma.genre.upsert({
     *   create: {
     *     // ... data to create a Genre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genre we want to update
     *   }
     * })
     */
    upsert<T extends GenreUpsertArgs>(args: SelectSubset<T, GenreUpsertArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genre.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends GenreCountArgs>(
      args?: Subset<T, GenreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GenreAggregateArgs>(args: Subset<T, GenreAggregateArgs>): Prisma.PrismaPromise<GetGenreAggregateType<T>>

    /**
     * Group by Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GenreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenreGroupByArgs['orderBy'] }
        : { orderBy?: GenreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Genre model
   */
  readonly fields: GenreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Genre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    books<T extends Genre$booksArgs<ExtArgs> = {}>(args?: Subset<T, Genre$booksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookGenrePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Genre model
   */ 
  interface GenreFieldRefs {
    readonly id: FieldRef<"Genre", 'Int'>
    readonly name: FieldRef<"Genre", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Genre findUnique
   */
  export type GenreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre findUniqueOrThrow
   */
  export type GenreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre findFirst
   */
  export type GenreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre findFirstOrThrow
   */
  export type GenreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre findMany
   */
  export type GenreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre create
   */
  export type GenreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to create a Genre.
     */
    data: XOR<GenreCreateInput, GenreUncheckedCreateInput>
  }

  /**
   * Genre createMany
   */
  export type GenreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Genres.
     */
    data: GenreCreateManyInput | GenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Genre createManyAndReturn
   */
  export type GenreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Genres.
     */
    data: GenreCreateManyInput | GenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Genre update
   */
  export type GenreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to update a Genre.
     */
    data: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
    /**
     * Choose, which Genre to update.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre updateMany
   */
  export type GenreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Genres.
     */
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenreWhereInput
  }

  /**
   * Genre upsert
   */
  export type GenreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The filter to search for the Genre to update in case it exists.
     */
    where: GenreWhereUniqueInput
    /**
     * In case the Genre found by the `where` argument doesn't exist, create a new Genre with this data.
     */
    create: XOR<GenreCreateInput, GenreUncheckedCreateInput>
    /**
     * In case the Genre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
  }

  /**
   * Genre delete
   */
  export type GenreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter which Genre to delete.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre deleteMany
   */
  export type GenreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genres to delete
     */
    where?: GenreWhereInput
  }

  /**
   * Genre.books
   */
  export type Genre$booksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookGenre
     */
    select?: BookGenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookGenreInclude<ExtArgs> | null
    where?: BookGenreWhereInput
    orderBy?: BookGenreOrderByWithRelationInput | BookGenreOrderByWithRelationInput[]
    cursor?: BookGenreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookGenreScalarFieldEnum | BookGenreScalarFieldEnum[]
  }

  /**
   * Genre without action
   */
  export type GenreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
  }


  /**
   * Model BookGenre
   */

  export type AggregateBookGenre = {
    _count: BookGenreCountAggregateOutputType | null
    _avg: BookGenreAvgAggregateOutputType | null
    _sum: BookGenreSumAggregateOutputType | null
    _min: BookGenreMinAggregateOutputType | null
    _max: BookGenreMaxAggregateOutputType | null
  }

  export type BookGenreAvgAggregateOutputType = {
    bookId: number | null
    genreId: number | null
  }

  export type BookGenreSumAggregateOutputType = {
    bookId: number | null
    genreId: number | null
  }

  export type BookGenreMinAggregateOutputType = {
    bookId: number | null
    genreId: number | null
  }

  export type BookGenreMaxAggregateOutputType = {
    bookId: number | null
    genreId: number | null
  }

  export type BookGenreCountAggregateOutputType = {
    bookId: number
    genreId: number
    _all: number
  }


  export type BookGenreAvgAggregateInputType = {
    bookId?: true
    genreId?: true
  }

  export type BookGenreSumAggregateInputType = {
    bookId?: true
    genreId?: true
  }

  export type BookGenreMinAggregateInputType = {
    bookId?: true
    genreId?: true
  }

  export type BookGenreMaxAggregateInputType = {
    bookId?: true
    genreId?: true
  }

  export type BookGenreCountAggregateInputType = {
    bookId?: true
    genreId?: true
    _all?: true
  }

  export type BookGenreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookGenre to aggregate.
     */
    where?: BookGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookGenres to fetch.
     */
    orderBy?: BookGenreOrderByWithRelationInput | BookGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookGenres
    **/
    _count?: true | BookGenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookGenreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookGenreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookGenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookGenreMaxAggregateInputType
  }

  export type GetBookGenreAggregateType<T extends BookGenreAggregateArgs> = {
        [P in keyof T & keyof AggregateBookGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookGenre[P]>
      : GetScalarType<T[P], AggregateBookGenre[P]>
  }




  export type BookGenreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookGenreWhereInput
    orderBy?: BookGenreOrderByWithAggregationInput | BookGenreOrderByWithAggregationInput[]
    by: BookGenreScalarFieldEnum[] | BookGenreScalarFieldEnum
    having?: BookGenreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookGenreCountAggregateInputType | true
    _avg?: BookGenreAvgAggregateInputType
    _sum?: BookGenreSumAggregateInputType
    _min?: BookGenreMinAggregateInputType
    _max?: BookGenreMaxAggregateInputType
  }

  export type BookGenreGroupByOutputType = {
    bookId: number
    genreId: number
    _count: BookGenreCountAggregateOutputType | null
    _avg: BookGenreAvgAggregateOutputType | null
    _sum: BookGenreSumAggregateOutputType | null
    _min: BookGenreMinAggregateOutputType | null
    _max: BookGenreMaxAggregateOutputType | null
  }

  type GetBookGenreGroupByPayload<T extends BookGenreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookGenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookGenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookGenreGroupByOutputType[P]>
            : GetScalarType<T[P], BookGenreGroupByOutputType[P]>
        }
      >
    >


  export type BookGenreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bookId?: boolean
    genreId?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookGenre"]>

  export type BookGenreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bookId?: boolean
    genreId?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookGenre"]>

  export type BookGenreSelectScalar = {
    bookId?: boolean
    genreId?: boolean
  }

  export type BookGenreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
  }
  export type BookGenreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
  }

  export type $BookGenrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookGenre"
    objects: {
      book: Prisma.$BookPayload<ExtArgs>
      genre: Prisma.$GenrePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      bookId: number
      genreId: number
    }, ExtArgs["result"]["bookGenre"]>
    composites: {}
  }

  type BookGenreGetPayload<S extends boolean | null | undefined | BookGenreDefaultArgs> = $Result.GetResult<Prisma.$BookGenrePayload, S>

  type BookGenreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BookGenreFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BookGenreCountAggregateInputType | true
    }

  export interface BookGenreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookGenre'], meta: { name: 'BookGenre' } }
    /**
     * Find zero or one BookGenre that matches the filter.
     * @param {BookGenreFindUniqueArgs} args - Arguments to find a BookGenre
     * @example
     * // Get one BookGenre
     * const bookGenre = await prisma.bookGenre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookGenreFindUniqueArgs>(args: SelectSubset<T, BookGenreFindUniqueArgs<ExtArgs>>): Prisma__BookGenreClient<$Result.GetResult<Prisma.$BookGenrePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one BookGenre that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BookGenreFindUniqueOrThrowArgs} args - Arguments to find a BookGenre
     * @example
     * // Get one BookGenre
     * const bookGenre = await prisma.bookGenre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookGenreFindUniqueOrThrowArgs>(args: SelectSubset<T, BookGenreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookGenreClient<$Result.GetResult<Prisma.$BookGenrePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first BookGenre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGenreFindFirstArgs} args - Arguments to find a BookGenre
     * @example
     * // Get one BookGenre
     * const bookGenre = await prisma.bookGenre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookGenreFindFirstArgs>(args?: SelectSubset<T, BookGenreFindFirstArgs<ExtArgs>>): Prisma__BookGenreClient<$Result.GetResult<Prisma.$BookGenrePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first BookGenre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGenreFindFirstOrThrowArgs} args - Arguments to find a BookGenre
     * @example
     * // Get one BookGenre
     * const bookGenre = await prisma.bookGenre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookGenreFindFirstOrThrowArgs>(args?: SelectSubset<T, BookGenreFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookGenreClient<$Result.GetResult<Prisma.$BookGenrePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more BookGenres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGenreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookGenres
     * const bookGenres = await prisma.bookGenre.findMany()
     * 
     * // Get first 10 BookGenres
     * const bookGenres = await prisma.bookGenre.findMany({ take: 10 })
     * 
     * // Only select the `bookId`
     * const bookGenreWithBookIdOnly = await prisma.bookGenre.findMany({ select: { bookId: true } })
     * 
     */
    findMany<T extends BookGenreFindManyArgs>(args?: SelectSubset<T, BookGenreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookGenrePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a BookGenre.
     * @param {BookGenreCreateArgs} args - Arguments to create a BookGenre.
     * @example
     * // Create one BookGenre
     * const BookGenre = await prisma.bookGenre.create({
     *   data: {
     *     // ... data to create a BookGenre
     *   }
     * })
     * 
     */
    create<T extends BookGenreCreateArgs>(args: SelectSubset<T, BookGenreCreateArgs<ExtArgs>>): Prisma__BookGenreClient<$Result.GetResult<Prisma.$BookGenrePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many BookGenres.
     * @param {BookGenreCreateManyArgs} args - Arguments to create many BookGenres.
     * @example
     * // Create many BookGenres
     * const bookGenre = await prisma.bookGenre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookGenreCreateManyArgs>(args?: SelectSubset<T, BookGenreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookGenres and returns the data saved in the database.
     * @param {BookGenreCreateManyAndReturnArgs} args - Arguments to create many BookGenres.
     * @example
     * // Create many BookGenres
     * const bookGenre = await prisma.bookGenre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookGenres and only return the `bookId`
     * const bookGenreWithBookIdOnly = await prisma.bookGenre.createManyAndReturn({ 
     *   select: { bookId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookGenreCreateManyAndReturnArgs>(args?: SelectSubset<T, BookGenreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookGenrePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a BookGenre.
     * @param {BookGenreDeleteArgs} args - Arguments to delete one BookGenre.
     * @example
     * // Delete one BookGenre
     * const BookGenre = await prisma.bookGenre.delete({
     *   where: {
     *     // ... filter to delete one BookGenre
     *   }
     * })
     * 
     */
    delete<T extends BookGenreDeleteArgs>(args: SelectSubset<T, BookGenreDeleteArgs<ExtArgs>>): Prisma__BookGenreClient<$Result.GetResult<Prisma.$BookGenrePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one BookGenre.
     * @param {BookGenreUpdateArgs} args - Arguments to update one BookGenre.
     * @example
     * // Update one BookGenre
     * const bookGenre = await prisma.bookGenre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookGenreUpdateArgs>(args: SelectSubset<T, BookGenreUpdateArgs<ExtArgs>>): Prisma__BookGenreClient<$Result.GetResult<Prisma.$BookGenrePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more BookGenres.
     * @param {BookGenreDeleteManyArgs} args - Arguments to filter BookGenres to delete.
     * @example
     * // Delete a few BookGenres
     * const { count } = await prisma.bookGenre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookGenreDeleteManyArgs>(args?: SelectSubset<T, BookGenreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGenreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookGenres
     * const bookGenre = await prisma.bookGenre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookGenreUpdateManyArgs>(args: SelectSubset<T, BookGenreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BookGenre.
     * @param {BookGenreUpsertArgs} args - Arguments to update or create a BookGenre.
     * @example
     * // Update or create a BookGenre
     * const bookGenre = await prisma.bookGenre.upsert({
     *   create: {
     *     // ... data to create a BookGenre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookGenre we want to update
     *   }
     * })
     */
    upsert<T extends BookGenreUpsertArgs>(args: SelectSubset<T, BookGenreUpsertArgs<ExtArgs>>): Prisma__BookGenreClient<$Result.GetResult<Prisma.$BookGenrePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of BookGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGenreCountArgs} args - Arguments to filter BookGenres to count.
     * @example
     * // Count the number of BookGenres
     * const count = await prisma.bookGenre.count({
     *   where: {
     *     // ... the filter for the BookGenres we want to count
     *   }
     * })
    **/
    count<T extends BookGenreCountArgs>(
      args?: Subset<T, BookGenreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookGenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookGenre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookGenreAggregateArgs>(args: Subset<T, BookGenreAggregateArgs>): Prisma.PrismaPromise<GetBookGenreAggregateType<T>>

    /**
     * Group by BookGenre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGenreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookGenreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookGenreGroupByArgs['orderBy'] }
        : { orderBy?: BookGenreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookGenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGenreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookGenre model
   */
  readonly fields: BookGenreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookGenre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookGenreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    genre<T extends GenreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GenreDefaultArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BookGenre model
   */ 
  interface BookGenreFieldRefs {
    readonly bookId: FieldRef<"BookGenre", 'Int'>
    readonly genreId: FieldRef<"BookGenre", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BookGenre findUnique
   */
  export type BookGenreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookGenre
     */
    select?: BookGenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookGenreInclude<ExtArgs> | null
    /**
     * Filter, which BookGenre to fetch.
     */
    where: BookGenreWhereUniqueInput
  }

  /**
   * BookGenre findUniqueOrThrow
   */
  export type BookGenreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookGenre
     */
    select?: BookGenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookGenreInclude<ExtArgs> | null
    /**
     * Filter, which BookGenre to fetch.
     */
    where: BookGenreWhereUniqueInput
  }

  /**
   * BookGenre findFirst
   */
  export type BookGenreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookGenre
     */
    select?: BookGenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookGenreInclude<ExtArgs> | null
    /**
     * Filter, which BookGenre to fetch.
     */
    where?: BookGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookGenres to fetch.
     */
    orderBy?: BookGenreOrderByWithRelationInput | BookGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookGenres.
     */
    cursor?: BookGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookGenres.
     */
    distinct?: BookGenreScalarFieldEnum | BookGenreScalarFieldEnum[]
  }

  /**
   * BookGenre findFirstOrThrow
   */
  export type BookGenreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookGenre
     */
    select?: BookGenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookGenreInclude<ExtArgs> | null
    /**
     * Filter, which BookGenre to fetch.
     */
    where?: BookGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookGenres to fetch.
     */
    orderBy?: BookGenreOrderByWithRelationInput | BookGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookGenres.
     */
    cursor?: BookGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookGenres.
     */
    distinct?: BookGenreScalarFieldEnum | BookGenreScalarFieldEnum[]
  }

  /**
   * BookGenre findMany
   */
  export type BookGenreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookGenre
     */
    select?: BookGenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookGenreInclude<ExtArgs> | null
    /**
     * Filter, which BookGenres to fetch.
     */
    where?: BookGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookGenres to fetch.
     */
    orderBy?: BookGenreOrderByWithRelationInput | BookGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookGenres.
     */
    cursor?: BookGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookGenres.
     */
    skip?: number
    distinct?: BookGenreScalarFieldEnum | BookGenreScalarFieldEnum[]
  }

  /**
   * BookGenre create
   */
  export type BookGenreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookGenre
     */
    select?: BookGenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookGenreInclude<ExtArgs> | null
    /**
     * The data needed to create a BookGenre.
     */
    data: XOR<BookGenreCreateInput, BookGenreUncheckedCreateInput>
  }

  /**
   * BookGenre createMany
   */
  export type BookGenreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookGenres.
     */
    data: BookGenreCreateManyInput | BookGenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookGenre createManyAndReturn
   */
  export type BookGenreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookGenre
     */
    select?: BookGenreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many BookGenres.
     */
    data: BookGenreCreateManyInput | BookGenreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookGenreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookGenre update
   */
  export type BookGenreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookGenre
     */
    select?: BookGenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookGenreInclude<ExtArgs> | null
    /**
     * The data needed to update a BookGenre.
     */
    data: XOR<BookGenreUpdateInput, BookGenreUncheckedUpdateInput>
    /**
     * Choose, which BookGenre to update.
     */
    where: BookGenreWhereUniqueInput
  }

  /**
   * BookGenre updateMany
   */
  export type BookGenreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookGenres.
     */
    data: XOR<BookGenreUpdateManyMutationInput, BookGenreUncheckedUpdateManyInput>
    /**
     * Filter which BookGenres to update
     */
    where?: BookGenreWhereInput
  }

  /**
   * BookGenre upsert
   */
  export type BookGenreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookGenre
     */
    select?: BookGenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookGenreInclude<ExtArgs> | null
    /**
     * The filter to search for the BookGenre to update in case it exists.
     */
    where: BookGenreWhereUniqueInput
    /**
     * In case the BookGenre found by the `where` argument doesn't exist, create a new BookGenre with this data.
     */
    create: XOR<BookGenreCreateInput, BookGenreUncheckedCreateInput>
    /**
     * In case the BookGenre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookGenreUpdateInput, BookGenreUncheckedUpdateInput>
  }

  /**
   * BookGenre delete
   */
  export type BookGenreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookGenre
     */
    select?: BookGenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookGenreInclude<ExtArgs> | null
    /**
     * Filter which BookGenre to delete.
     */
    where: BookGenreWhereUniqueInput
  }

  /**
   * BookGenre deleteMany
   */
  export type BookGenreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookGenres to delete
     */
    where?: BookGenreWhereInput
  }

  /**
   * BookGenre without action
   */
  export type BookGenreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookGenre
     */
    select?: BookGenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookGenreInclude<ExtArgs> | null
  }


  /**
   * Model Publisher
   */

  export type AggregatePublisher = {
    _count: PublisherCountAggregateOutputType | null
    _avg: PublisherAvgAggregateOutputType | null
    _sum: PublisherSumAggregateOutputType | null
    _min: PublisherMinAggregateOutputType | null
    _max: PublisherMaxAggregateOutputType | null
  }

  export type PublisherAvgAggregateOutputType = {
    id: number | null
  }

  export type PublisherSumAggregateOutputType = {
    id: number | null
  }

  export type PublisherMinAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    phone: string | null
  }

  export type PublisherMaxAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    phone: string | null
  }

  export type PublisherCountAggregateOutputType = {
    id: number
    name: number
    address: number
    phone: number
    _all: number
  }


  export type PublisherAvgAggregateInputType = {
    id?: true
  }

  export type PublisherSumAggregateInputType = {
    id?: true
  }

  export type PublisherMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
  }

  export type PublisherMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
  }

  export type PublisherCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
    _all?: true
  }

  export type PublisherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Publisher to aggregate.
     */
    where?: PublisherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publishers to fetch.
     */
    orderBy?: PublisherOrderByWithRelationInput | PublisherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PublisherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publishers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publishers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Publishers
    **/
    _count?: true | PublisherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PublisherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PublisherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublisherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublisherMaxAggregateInputType
  }

  export type GetPublisherAggregateType<T extends PublisherAggregateArgs> = {
        [P in keyof T & keyof AggregatePublisher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublisher[P]>
      : GetScalarType<T[P], AggregatePublisher[P]>
  }




  export type PublisherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublisherWhereInput
    orderBy?: PublisherOrderByWithAggregationInput | PublisherOrderByWithAggregationInput[]
    by: PublisherScalarFieldEnum[] | PublisherScalarFieldEnum
    having?: PublisherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublisherCountAggregateInputType | true
    _avg?: PublisherAvgAggregateInputType
    _sum?: PublisherSumAggregateInputType
    _min?: PublisherMinAggregateInputType
    _max?: PublisherMaxAggregateInputType
  }

  export type PublisherGroupByOutputType = {
    id: number
    name: string
    address: string
    phone: string
    _count: PublisherCountAggregateOutputType | null
    _avg: PublisherAvgAggregateOutputType | null
    _sum: PublisherSumAggregateOutputType | null
    _min: PublisherMinAggregateOutputType | null
    _max: PublisherMaxAggregateOutputType | null
  }

  type GetPublisherGroupByPayload<T extends PublisherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PublisherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublisherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublisherGroupByOutputType[P]>
            : GetScalarType<T[P], PublisherGroupByOutputType[P]>
        }
      >
    >


  export type PublisherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    books?: boolean | Publisher$booksArgs<ExtArgs>
    _count?: boolean | PublisherCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publisher"]>

  export type PublisherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
  }, ExtArgs["result"]["publisher"]>

  export type PublisherSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
  }

  export type PublisherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | Publisher$booksArgs<ExtArgs>
    _count?: boolean | PublisherCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PublisherIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PublisherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Publisher"
    objects: {
      books: Prisma.$BookPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      address: string
      phone: string
    }, ExtArgs["result"]["publisher"]>
    composites: {}
  }

  type PublisherGetPayload<S extends boolean | null | undefined | PublisherDefaultArgs> = $Result.GetResult<Prisma.$PublisherPayload, S>

  type PublisherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PublisherFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PublisherCountAggregateInputType | true
    }

  export interface PublisherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Publisher'], meta: { name: 'Publisher' } }
    /**
     * Find zero or one Publisher that matches the filter.
     * @param {PublisherFindUniqueArgs} args - Arguments to find a Publisher
     * @example
     * // Get one Publisher
     * const publisher = await prisma.publisher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PublisherFindUniqueArgs>(args: SelectSubset<T, PublisherFindUniqueArgs<ExtArgs>>): Prisma__PublisherClient<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Publisher that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PublisherFindUniqueOrThrowArgs} args - Arguments to find a Publisher
     * @example
     * // Get one Publisher
     * const publisher = await prisma.publisher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PublisherFindUniqueOrThrowArgs>(args: SelectSubset<T, PublisherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PublisherClient<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Publisher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherFindFirstArgs} args - Arguments to find a Publisher
     * @example
     * // Get one Publisher
     * const publisher = await prisma.publisher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PublisherFindFirstArgs>(args?: SelectSubset<T, PublisherFindFirstArgs<ExtArgs>>): Prisma__PublisherClient<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Publisher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherFindFirstOrThrowArgs} args - Arguments to find a Publisher
     * @example
     * // Get one Publisher
     * const publisher = await prisma.publisher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PublisherFindFirstOrThrowArgs>(args?: SelectSubset<T, PublisherFindFirstOrThrowArgs<ExtArgs>>): Prisma__PublisherClient<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Publishers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Publishers
     * const publishers = await prisma.publisher.findMany()
     * 
     * // Get first 10 Publishers
     * const publishers = await prisma.publisher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const publisherWithIdOnly = await prisma.publisher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PublisherFindManyArgs>(args?: SelectSubset<T, PublisherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Publisher.
     * @param {PublisherCreateArgs} args - Arguments to create a Publisher.
     * @example
     * // Create one Publisher
     * const Publisher = await prisma.publisher.create({
     *   data: {
     *     // ... data to create a Publisher
     *   }
     * })
     * 
     */
    create<T extends PublisherCreateArgs>(args: SelectSubset<T, PublisherCreateArgs<ExtArgs>>): Prisma__PublisherClient<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Publishers.
     * @param {PublisherCreateManyArgs} args - Arguments to create many Publishers.
     * @example
     * // Create many Publishers
     * const publisher = await prisma.publisher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PublisherCreateManyArgs>(args?: SelectSubset<T, PublisherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Publishers and returns the data saved in the database.
     * @param {PublisherCreateManyAndReturnArgs} args - Arguments to create many Publishers.
     * @example
     * // Create many Publishers
     * const publisher = await prisma.publisher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Publishers and only return the `id`
     * const publisherWithIdOnly = await prisma.publisher.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PublisherCreateManyAndReturnArgs>(args?: SelectSubset<T, PublisherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Publisher.
     * @param {PublisherDeleteArgs} args - Arguments to delete one Publisher.
     * @example
     * // Delete one Publisher
     * const Publisher = await prisma.publisher.delete({
     *   where: {
     *     // ... filter to delete one Publisher
     *   }
     * })
     * 
     */
    delete<T extends PublisherDeleteArgs>(args: SelectSubset<T, PublisherDeleteArgs<ExtArgs>>): Prisma__PublisherClient<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Publisher.
     * @param {PublisherUpdateArgs} args - Arguments to update one Publisher.
     * @example
     * // Update one Publisher
     * const publisher = await prisma.publisher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PublisherUpdateArgs>(args: SelectSubset<T, PublisherUpdateArgs<ExtArgs>>): Prisma__PublisherClient<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Publishers.
     * @param {PublisherDeleteManyArgs} args - Arguments to filter Publishers to delete.
     * @example
     * // Delete a few Publishers
     * const { count } = await prisma.publisher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PublisherDeleteManyArgs>(args?: SelectSubset<T, PublisherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Publishers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Publishers
     * const publisher = await prisma.publisher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PublisherUpdateManyArgs>(args: SelectSubset<T, PublisherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Publisher.
     * @param {PublisherUpsertArgs} args - Arguments to update or create a Publisher.
     * @example
     * // Update or create a Publisher
     * const publisher = await prisma.publisher.upsert({
     *   create: {
     *     // ... data to create a Publisher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Publisher we want to update
     *   }
     * })
     */
    upsert<T extends PublisherUpsertArgs>(args: SelectSubset<T, PublisherUpsertArgs<ExtArgs>>): Prisma__PublisherClient<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Publishers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherCountArgs} args - Arguments to filter Publishers to count.
     * @example
     * // Count the number of Publishers
     * const count = await prisma.publisher.count({
     *   where: {
     *     // ... the filter for the Publishers we want to count
     *   }
     * })
    **/
    count<T extends PublisherCountArgs>(
      args?: Subset<T, PublisherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublisherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Publisher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PublisherAggregateArgs>(args: Subset<T, PublisherAggregateArgs>): Prisma.PrismaPromise<GetPublisherAggregateType<T>>

    /**
     * Group by Publisher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PublisherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PublisherGroupByArgs['orderBy'] }
        : { orderBy?: PublisherGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PublisherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublisherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Publisher model
   */
  readonly fields: PublisherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Publisher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PublisherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    books<T extends Publisher$booksArgs<ExtArgs> = {}>(args?: Subset<T, Publisher$booksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Publisher model
   */ 
  interface PublisherFieldRefs {
    readonly id: FieldRef<"Publisher", 'Int'>
    readonly name: FieldRef<"Publisher", 'String'>
    readonly address: FieldRef<"Publisher", 'String'>
    readonly phone: FieldRef<"Publisher", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Publisher findUnique
   */
  export type PublisherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
    /**
     * Filter, which Publisher to fetch.
     */
    where: PublisherWhereUniqueInput
  }

  /**
   * Publisher findUniqueOrThrow
   */
  export type PublisherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
    /**
     * Filter, which Publisher to fetch.
     */
    where: PublisherWhereUniqueInput
  }

  /**
   * Publisher findFirst
   */
  export type PublisherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
    /**
     * Filter, which Publisher to fetch.
     */
    where?: PublisherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publishers to fetch.
     */
    orderBy?: PublisherOrderByWithRelationInput | PublisherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Publishers.
     */
    cursor?: PublisherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publishers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publishers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Publishers.
     */
    distinct?: PublisherScalarFieldEnum | PublisherScalarFieldEnum[]
  }

  /**
   * Publisher findFirstOrThrow
   */
  export type PublisherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
    /**
     * Filter, which Publisher to fetch.
     */
    where?: PublisherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publishers to fetch.
     */
    orderBy?: PublisherOrderByWithRelationInput | PublisherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Publishers.
     */
    cursor?: PublisherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publishers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publishers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Publishers.
     */
    distinct?: PublisherScalarFieldEnum | PublisherScalarFieldEnum[]
  }

  /**
   * Publisher findMany
   */
  export type PublisherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
    /**
     * Filter, which Publishers to fetch.
     */
    where?: PublisherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publishers to fetch.
     */
    orderBy?: PublisherOrderByWithRelationInput | PublisherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Publishers.
     */
    cursor?: PublisherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publishers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publishers.
     */
    skip?: number
    distinct?: PublisherScalarFieldEnum | PublisherScalarFieldEnum[]
  }

  /**
   * Publisher create
   */
  export type PublisherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
    /**
     * The data needed to create a Publisher.
     */
    data: XOR<PublisherCreateInput, PublisherUncheckedCreateInput>
  }

  /**
   * Publisher createMany
   */
  export type PublisherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Publishers.
     */
    data: PublisherCreateManyInput | PublisherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Publisher createManyAndReturn
   */
  export type PublisherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Publishers.
     */
    data: PublisherCreateManyInput | PublisherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Publisher update
   */
  export type PublisherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
    /**
     * The data needed to update a Publisher.
     */
    data: XOR<PublisherUpdateInput, PublisherUncheckedUpdateInput>
    /**
     * Choose, which Publisher to update.
     */
    where: PublisherWhereUniqueInput
  }

  /**
   * Publisher updateMany
   */
  export type PublisherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Publishers.
     */
    data: XOR<PublisherUpdateManyMutationInput, PublisherUncheckedUpdateManyInput>
    /**
     * Filter which Publishers to update
     */
    where?: PublisherWhereInput
  }

  /**
   * Publisher upsert
   */
  export type PublisherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
    /**
     * The filter to search for the Publisher to update in case it exists.
     */
    where: PublisherWhereUniqueInput
    /**
     * In case the Publisher found by the `where` argument doesn't exist, create a new Publisher with this data.
     */
    create: XOR<PublisherCreateInput, PublisherUncheckedCreateInput>
    /**
     * In case the Publisher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PublisherUpdateInput, PublisherUncheckedUpdateInput>
  }

  /**
   * Publisher delete
   */
  export type PublisherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
    /**
     * Filter which Publisher to delete.
     */
    where: PublisherWhereUniqueInput
  }

  /**
   * Publisher deleteMany
   */
  export type PublisherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Publishers to delete
     */
    where?: PublisherWhereInput
  }

  /**
   * Publisher.books
   */
  export type Publisher$booksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    where?: BookWhereInput
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    cursor?: BookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Publisher without action
   */
  export type PublisherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BookScalarFieldEnum: {
    id: 'id',
    title: 'title',
    authorId: 'authorId',
    publisherId: 'publisherId',
    year: 'year'
  };

  export type BookScalarFieldEnum = (typeof BookScalarFieldEnum)[keyof typeof BookScalarFieldEnum]


  export const AuthorScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    birthDate: 'birthDate',
    country: 'country'
  };

  export type AuthorScalarFieldEnum = (typeof AuthorScalarFieldEnum)[keyof typeof AuthorScalarFieldEnum]


  export const ReaderScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    address: 'address',
    phone: 'phone',
    registrationDate: 'registrationDate'
  };

  export type ReaderScalarFieldEnum = (typeof ReaderScalarFieldEnum)[keyof typeof ReaderScalarFieldEnum]


  export const LoanScalarFieldEnum: {
    id: 'id',
    readerId: 'readerId',
    bookId: 'bookId',
    issueDate: 'issueDate',
    returnDate: 'returnDate',
    status: 'status'
  };

  export type LoanScalarFieldEnum = (typeof LoanScalarFieldEnum)[keyof typeof LoanScalarFieldEnum]


  export const GenreScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type GenreScalarFieldEnum = (typeof GenreScalarFieldEnum)[keyof typeof GenreScalarFieldEnum]


  export const BookGenreScalarFieldEnum: {
    bookId: 'bookId',
    genreId: 'genreId'
  };

  export type BookGenreScalarFieldEnum = (typeof BookGenreScalarFieldEnum)[keyof typeof BookGenreScalarFieldEnum]


  export const PublisherScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    phone: 'phone'
  };

  export type PublisherScalarFieldEnum = (typeof PublisherScalarFieldEnum)[keyof typeof PublisherScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'LoanStatus'
   */
  export type EnumLoanStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LoanStatus'>
    


  /**
   * Reference to a field of type 'LoanStatus[]'
   */
  export type ListEnumLoanStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LoanStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type BookWhereInput = {
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    id?: IntFilter<"Book"> | number
    title?: StringFilter<"Book"> | string
    authorId?: IntFilter<"Book"> | number
    publisherId?: IntFilter<"Book"> | number
    year?: IntFilter<"Book"> | number
    author?: XOR<AuthorScalarRelationFilter, AuthorWhereInput>
    publisher?: XOR<PublisherScalarRelationFilter, PublisherWhereInput>
    genres?: BookGenreListRelationFilter
    loans?: LoanListRelationFilter
  }

  export type BookOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
    publisherId?: SortOrder
    year?: SortOrder
    author?: AuthorOrderByWithRelationInput
    publisher?: PublisherOrderByWithRelationInput
    genres?: BookGenreOrderByRelationAggregateInput
    loans?: LoanOrderByRelationAggregateInput
  }

  export type BookWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    title?: StringFilter<"Book"> | string
    authorId?: IntFilter<"Book"> | number
    publisherId?: IntFilter<"Book"> | number
    year?: IntFilter<"Book"> | number
    author?: XOR<AuthorScalarRelationFilter, AuthorWhereInput>
    publisher?: XOR<PublisherScalarRelationFilter, PublisherWhereInput>
    genres?: BookGenreListRelationFilter
    loans?: LoanListRelationFilter
  }, "id" | "id">

  export type BookOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
    publisherId?: SortOrder
    year?: SortOrder
    _count?: BookCountOrderByAggregateInput
    _avg?: BookAvgOrderByAggregateInput
    _max?: BookMaxOrderByAggregateInput
    _min?: BookMinOrderByAggregateInput
    _sum?: BookSumOrderByAggregateInput
  }

  export type BookScalarWhereWithAggregatesInput = {
    AND?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    OR?: BookScalarWhereWithAggregatesInput[]
    NOT?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Book"> | number
    title?: StringWithAggregatesFilter<"Book"> | string
    authorId?: IntWithAggregatesFilter<"Book"> | number
    publisherId?: IntWithAggregatesFilter<"Book"> | number
    year?: IntWithAggregatesFilter<"Book"> | number
  }

  export type AuthorWhereInput = {
    AND?: AuthorWhereInput | AuthorWhereInput[]
    OR?: AuthorWhereInput[]
    NOT?: AuthorWhereInput | AuthorWhereInput[]
    id?: IntFilter<"Author"> | number
    firstName?: StringFilter<"Author"> | string
    lastName?: StringFilter<"Author"> | string
    birthDate?: DateTimeNullableFilter<"Author"> | Date | string | null
    country?: StringFilter<"Author"> | string
    books?: BookListRelationFilter
  }

  export type AuthorOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    birthDate?: SortOrderInput | SortOrder
    country?: SortOrder
    books?: BookOrderByRelationAggregateInput
  }

  export type AuthorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AuthorWhereInput | AuthorWhereInput[]
    OR?: AuthorWhereInput[]
    NOT?: AuthorWhereInput | AuthorWhereInput[]
    firstName?: StringFilter<"Author"> | string
    lastName?: StringFilter<"Author"> | string
    birthDate?: DateTimeNullableFilter<"Author"> | Date | string | null
    country?: StringFilter<"Author"> | string
    books?: BookListRelationFilter
  }, "id">

  export type AuthorOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    birthDate?: SortOrderInput | SortOrder
    country?: SortOrder
    _count?: AuthorCountOrderByAggregateInput
    _avg?: AuthorAvgOrderByAggregateInput
    _max?: AuthorMaxOrderByAggregateInput
    _min?: AuthorMinOrderByAggregateInput
    _sum?: AuthorSumOrderByAggregateInput
  }

  export type AuthorScalarWhereWithAggregatesInput = {
    AND?: AuthorScalarWhereWithAggregatesInput | AuthorScalarWhereWithAggregatesInput[]
    OR?: AuthorScalarWhereWithAggregatesInput[]
    NOT?: AuthorScalarWhereWithAggregatesInput | AuthorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Author"> | number
    firstName?: StringWithAggregatesFilter<"Author"> | string
    lastName?: StringWithAggregatesFilter<"Author"> | string
    birthDate?: DateTimeNullableWithAggregatesFilter<"Author"> | Date | string | null
    country?: StringWithAggregatesFilter<"Author"> | string
  }

  export type ReaderWhereInput = {
    AND?: ReaderWhereInput | ReaderWhereInput[]
    OR?: ReaderWhereInput[]
    NOT?: ReaderWhereInput | ReaderWhereInput[]
    id?: IntFilter<"Reader"> | number
    firstName?: StringFilter<"Reader"> | string
    lastName?: StringFilter<"Reader"> | string
    address?: StringFilter<"Reader"> | string
    phone?: StringFilter<"Reader"> | string
    registrationDate?: DateTimeFilter<"Reader"> | Date | string
    loans?: LoanListRelationFilter
  }

  export type ReaderOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    registrationDate?: SortOrder
    loans?: LoanOrderByRelationAggregateInput
  }

  export type ReaderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReaderWhereInput | ReaderWhereInput[]
    OR?: ReaderWhereInput[]
    NOT?: ReaderWhereInput | ReaderWhereInput[]
    firstName?: StringFilter<"Reader"> | string
    lastName?: StringFilter<"Reader"> | string
    address?: StringFilter<"Reader"> | string
    phone?: StringFilter<"Reader"> | string
    registrationDate?: DateTimeFilter<"Reader"> | Date | string
    loans?: LoanListRelationFilter
  }, "id">

  export type ReaderOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    registrationDate?: SortOrder
    _count?: ReaderCountOrderByAggregateInput
    _avg?: ReaderAvgOrderByAggregateInput
    _max?: ReaderMaxOrderByAggregateInput
    _min?: ReaderMinOrderByAggregateInput
    _sum?: ReaderSumOrderByAggregateInput
  }

  export type ReaderScalarWhereWithAggregatesInput = {
    AND?: ReaderScalarWhereWithAggregatesInput | ReaderScalarWhereWithAggregatesInput[]
    OR?: ReaderScalarWhereWithAggregatesInput[]
    NOT?: ReaderScalarWhereWithAggregatesInput | ReaderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Reader"> | number
    firstName?: StringWithAggregatesFilter<"Reader"> | string
    lastName?: StringWithAggregatesFilter<"Reader"> | string
    address?: StringWithAggregatesFilter<"Reader"> | string
    phone?: StringWithAggregatesFilter<"Reader"> | string
    registrationDate?: DateTimeWithAggregatesFilter<"Reader"> | Date | string
  }

  export type LoanWhereInput = {
    AND?: LoanWhereInput | LoanWhereInput[]
    OR?: LoanWhereInput[]
    NOT?: LoanWhereInput | LoanWhereInput[]
    id?: IntFilter<"Loan"> | number
    readerId?: IntFilter<"Loan"> | number
    bookId?: IntFilter<"Loan"> | number
    issueDate?: DateTimeFilter<"Loan"> | Date | string
    returnDate?: DateTimeNullableFilter<"Loan"> | Date | string | null
    status?: EnumLoanStatusFilter<"Loan"> | $Enums.LoanStatus
    reader?: XOR<ReaderScalarRelationFilter, ReaderWhereInput>
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }

  export type LoanOrderByWithRelationInput = {
    id?: SortOrder
    readerId?: SortOrder
    bookId?: SortOrder
    issueDate?: SortOrder
    returnDate?: SortOrderInput | SortOrder
    status?: SortOrder
    reader?: ReaderOrderByWithRelationInput
    book?: BookOrderByWithRelationInput
  }

  export type LoanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LoanWhereInput | LoanWhereInput[]
    OR?: LoanWhereInput[]
    NOT?: LoanWhereInput | LoanWhereInput[]
    readerId?: IntFilter<"Loan"> | number
    bookId?: IntFilter<"Loan"> | number
    issueDate?: DateTimeFilter<"Loan"> | Date | string
    returnDate?: DateTimeNullableFilter<"Loan"> | Date | string | null
    status?: EnumLoanStatusFilter<"Loan"> | $Enums.LoanStatus
    reader?: XOR<ReaderScalarRelationFilter, ReaderWhereInput>
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }, "id">

  export type LoanOrderByWithAggregationInput = {
    id?: SortOrder
    readerId?: SortOrder
    bookId?: SortOrder
    issueDate?: SortOrder
    returnDate?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: LoanCountOrderByAggregateInput
    _avg?: LoanAvgOrderByAggregateInput
    _max?: LoanMaxOrderByAggregateInput
    _min?: LoanMinOrderByAggregateInput
    _sum?: LoanSumOrderByAggregateInput
  }

  export type LoanScalarWhereWithAggregatesInput = {
    AND?: LoanScalarWhereWithAggregatesInput | LoanScalarWhereWithAggregatesInput[]
    OR?: LoanScalarWhereWithAggregatesInput[]
    NOT?: LoanScalarWhereWithAggregatesInput | LoanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Loan"> | number
    readerId?: IntWithAggregatesFilter<"Loan"> | number
    bookId?: IntWithAggregatesFilter<"Loan"> | number
    issueDate?: DateTimeWithAggregatesFilter<"Loan"> | Date | string
    returnDate?: DateTimeNullableWithAggregatesFilter<"Loan"> | Date | string | null
    status?: EnumLoanStatusWithAggregatesFilter<"Loan"> | $Enums.LoanStatus
  }

  export type GenreWhereInput = {
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    id?: IntFilter<"Genre"> | number
    name?: StringFilter<"Genre"> | string
    books?: BookGenreListRelationFilter
  }

  export type GenreOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    books?: BookGenreOrderByRelationAggregateInput
  }

  export type GenreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    books?: BookGenreListRelationFilter
  }, "id" | "name">

  export type GenreOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: GenreCountOrderByAggregateInput
    _avg?: GenreAvgOrderByAggregateInput
    _max?: GenreMaxOrderByAggregateInput
    _min?: GenreMinOrderByAggregateInput
    _sum?: GenreSumOrderByAggregateInput
  }

  export type GenreScalarWhereWithAggregatesInput = {
    AND?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    OR?: GenreScalarWhereWithAggregatesInput[]
    NOT?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Genre"> | number
    name?: StringWithAggregatesFilter<"Genre"> | string
  }

  export type BookGenreWhereInput = {
    AND?: BookGenreWhereInput | BookGenreWhereInput[]
    OR?: BookGenreWhereInput[]
    NOT?: BookGenreWhereInput | BookGenreWhereInput[]
    bookId?: IntFilter<"BookGenre"> | number
    genreId?: IntFilter<"BookGenre"> | number
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    genre?: XOR<GenreScalarRelationFilter, GenreWhereInput>
  }

  export type BookGenreOrderByWithRelationInput = {
    bookId?: SortOrder
    genreId?: SortOrder
    book?: BookOrderByWithRelationInput
    genre?: GenreOrderByWithRelationInput
  }

  export type BookGenreWhereUniqueInput = Prisma.AtLeast<{
    bookId_genreId?: BookGenreBookIdGenreIdCompoundUniqueInput
    AND?: BookGenreWhereInput | BookGenreWhereInput[]
    OR?: BookGenreWhereInput[]
    NOT?: BookGenreWhereInput | BookGenreWhereInput[]
    bookId?: IntFilter<"BookGenre"> | number
    genreId?: IntFilter<"BookGenre"> | number
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    genre?: XOR<GenreScalarRelationFilter, GenreWhereInput>
  }, "bookId_genreId">

  export type BookGenreOrderByWithAggregationInput = {
    bookId?: SortOrder
    genreId?: SortOrder
    _count?: BookGenreCountOrderByAggregateInput
    _avg?: BookGenreAvgOrderByAggregateInput
    _max?: BookGenreMaxOrderByAggregateInput
    _min?: BookGenreMinOrderByAggregateInput
    _sum?: BookGenreSumOrderByAggregateInput
  }

  export type BookGenreScalarWhereWithAggregatesInput = {
    AND?: BookGenreScalarWhereWithAggregatesInput | BookGenreScalarWhereWithAggregatesInput[]
    OR?: BookGenreScalarWhereWithAggregatesInput[]
    NOT?: BookGenreScalarWhereWithAggregatesInput | BookGenreScalarWhereWithAggregatesInput[]
    bookId?: IntWithAggregatesFilter<"BookGenre"> | number
    genreId?: IntWithAggregatesFilter<"BookGenre"> | number
  }

  export type PublisherWhereInput = {
    AND?: PublisherWhereInput | PublisherWhereInput[]
    OR?: PublisherWhereInput[]
    NOT?: PublisherWhereInput | PublisherWhereInput[]
    id?: IntFilter<"Publisher"> | number
    name?: StringFilter<"Publisher"> | string
    address?: StringFilter<"Publisher"> | string
    phone?: StringFilter<"Publisher"> | string
    books?: BookListRelationFilter
  }

  export type PublisherOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    books?: BookOrderByRelationAggregateInput
  }

  export type PublisherWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PublisherWhereInput | PublisherWhereInput[]
    OR?: PublisherWhereInput[]
    NOT?: PublisherWhereInput | PublisherWhereInput[]
    name?: StringFilter<"Publisher"> | string
    address?: StringFilter<"Publisher"> | string
    phone?: StringFilter<"Publisher"> | string
    books?: BookListRelationFilter
  }, "id">

  export type PublisherOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    _count?: PublisherCountOrderByAggregateInput
    _avg?: PublisherAvgOrderByAggregateInput
    _max?: PublisherMaxOrderByAggregateInput
    _min?: PublisherMinOrderByAggregateInput
    _sum?: PublisherSumOrderByAggregateInput
  }

  export type PublisherScalarWhereWithAggregatesInput = {
    AND?: PublisherScalarWhereWithAggregatesInput | PublisherScalarWhereWithAggregatesInput[]
    OR?: PublisherScalarWhereWithAggregatesInput[]
    NOT?: PublisherScalarWhereWithAggregatesInput | PublisherScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Publisher"> | number
    name?: StringWithAggregatesFilter<"Publisher"> | string
    address?: StringWithAggregatesFilter<"Publisher"> | string
    phone?: StringWithAggregatesFilter<"Publisher"> | string
  }

  export type BookCreateInput = {
    title: string
    year: number
    author: AuthorCreateNestedOneWithoutBooksInput
    publisher: PublisherCreateNestedOneWithoutBooksInput
    genres?: BookGenreCreateNestedManyWithoutBookInput
    loans?: LoanCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateInput = {
    id?: number
    title: string
    authorId: number
    publisherId: number
    year: number
    genres?: BookGenreUncheckedCreateNestedManyWithoutBookInput
    loans?: LoanUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    author?: AuthorUpdateOneRequiredWithoutBooksNestedInput
    publisher?: PublisherUpdateOneRequiredWithoutBooksNestedInput
    genres?: BookGenreUpdateManyWithoutBookNestedInput
    loans?: LoanUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    publisherId?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    genres?: BookGenreUncheckedUpdateManyWithoutBookNestedInput
    loans?: LoanUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookCreateManyInput = {
    id?: number
    title: string
    authorId: number
    publisherId: number
    year: number
  }

  export type BookUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
  }

  export type BookUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    publisherId?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
  }

  export type AuthorCreateInput = {
    firstName: string
    lastName: string
    birthDate?: Date | string | null
    country: string
    books?: BookCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    birthDate?: Date | string | null
    country: string
    books?: BookUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: StringFieldUpdateOperationsInput | string
    books?: BookUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: StringFieldUpdateOperationsInput | string
    books?: BookUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    birthDate?: Date | string | null
    country: string
  }

  export type AuthorUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: StringFieldUpdateOperationsInput | string
  }

  export type AuthorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: StringFieldUpdateOperationsInput | string
  }

  export type ReaderCreateInput = {
    firstName: string
    lastName: string
    address: string
    phone: string
    registrationDate?: Date | string
    loans?: LoanCreateNestedManyWithoutReaderInput
  }

  export type ReaderUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    address: string
    phone: string
    registrationDate?: Date | string
    loans?: LoanUncheckedCreateNestedManyWithoutReaderInput
  }

  export type ReaderUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    loans?: LoanUpdateManyWithoutReaderNestedInput
  }

  export type ReaderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    loans?: LoanUncheckedUpdateManyWithoutReaderNestedInput
  }

  export type ReaderCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    address: string
    phone: string
    registrationDate?: Date | string
  }

  export type ReaderUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReaderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoanCreateInput = {
    issueDate: Date | string
    returnDate?: Date | string | null
    status: $Enums.LoanStatus
    reader: ReaderCreateNestedOneWithoutLoansInput
    book: BookCreateNestedOneWithoutLoansInput
  }

  export type LoanUncheckedCreateInput = {
    id?: number
    readerId: number
    bookId: number
    issueDate: Date | string
    returnDate?: Date | string | null
    status: $Enums.LoanStatus
  }

  export type LoanUpdateInput = {
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumLoanStatusFieldUpdateOperationsInput | $Enums.LoanStatus
    reader?: ReaderUpdateOneRequiredWithoutLoansNestedInput
    book?: BookUpdateOneRequiredWithoutLoansNestedInput
  }

  export type LoanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    readerId?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumLoanStatusFieldUpdateOperationsInput | $Enums.LoanStatus
  }

  export type LoanCreateManyInput = {
    id?: number
    readerId: number
    bookId: number
    issueDate: Date | string
    returnDate?: Date | string | null
    status: $Enums.LoanStatus
  }

  export type LoanUpdateManyMutationInput = {
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumLoanStatusFieldUpdateOperationsInput | $Enums.LoanStatus
  }

  export type LoanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    readerId?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumLoanStatusFieldUpdateOperationsInput | $Enums.LoanStatus
  }

  export type GenreCreateInput = {
    name: string
    books?: BookGenreCreateNestedManyWithoutGenreInput
  }

  export type GenreUncheckedCreateInput = {
    id?: number
    name: string
    books?: BookGenreUncheckedCreateNestedManyWithoutGenreInput
  }

  export type GenreUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    books?: BookGenreUpdateManyWithoutGenreNestedInput
  }

  export type GenreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    books?: BookGenreUncheckedUpdateManyWithoutGenreNestedInput
  }

  export type GenreCreateManyInput = {
    id?: number
    name: string
  }

  export type GenreUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BookGenreCreateInput = {
    book: BookCreateNestedOneWithoutGenresInput
    genre: GenreCreateNestedOneWithoutBooksInput
  }

  export type BookGenreUncheckedCreateInput = {
    bookId: number
    genreId: number
  }

  export type BookGenreUpdateInput = {
    book?: BookUpdateOneRequiredWithoutGenresNestedInput
    genre?: GenreUpdateOneRequiredWithoutBooksNestedInput
  }

  export type BookGenreUncheckedUpdateInput = {
    bookId?: IntFieldUpdateOperationsInput | number
    genreId?: IntFieldUpdateOperationsInput | number
  }

  export type BookGenreCreateManyInput = {
    bookId: number
    genreId: number
  }

  export type BookGenreUpdateManyMutationInput = {

  }

  export type BookGenreUncheckedUpdateManyInput = {
    bookId?: IntFieldUpdateOperationsInput | number
    genreId?: IntFieldUpdateOperationsInput | number
  }

  export type PublisherCreateInput = {
    name: string
    address: string
    phone: string
    books?: BookCreateNestedManyWithoutPublisherInput
  }

  export type PublisherUncheckedCreateInput = {
    id?: number
    name: string
    address: string
    phone: string
    books?: BookUncheckedCreateNestedManyWithoutPublisherInput
  }

  export type PublisherUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    books?: BookUpdateManyWithoutPublisherNestedInput
  }

  export type PublisherUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    books?: BookUncheckedUpdateManyWithoutPublisherNestedInput
  }

  export type PublisherCreateManyInput = {
    id?: number
    name: string
    address: string
    phone: string
  }

  export type PublisherUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type PublisherUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type AuthorScalarRelationFilter = {
    is?: AuthorWhereInput
    isNot?: AuthorWhereInput
  }

  export type PublisherScalarRelationFilter = {
    is?: PublisherWhereInput
    isNot?: PublisherWhereInput
  }

  export type BookGenreListRelationFilter = {
    every?: BookGenreWhereInput
    some?: BookGenreWhereInput
    none?: BookGenreWhereInput
  }

  export type LoanListRelationFilter = {
    every?: LoanWhereInput
    some?: LoanWhereInput
    none?: LoanWhereInput
  }

  export type BookGenreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LoanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
    publisherId?: SortOrder
    year?: SortOrder
  }

  export type BookAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    publisherId?: SortOrder
    year?: SortOrder
  }

  export type BookMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
    publisherId?: SortOrder
    year?: SortOrder
  }

  export type BookMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
    publisherId?: SortOrder
    year?: SortOrder
  }

  export type BookSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    publisherId?: SortOrder
    year?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BookListRelationFilter = {
    every?: BookWhereInput
    some?: BookWhereInput
    none?: BookWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuthorCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    birthDate?: SortOrder
    country?: SortOrder
  }

  export type AuthorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AuthorMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    birthDate?: SortOrder
    country?: SortOrder
  }

  export type AuthorMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    birthDate?: SortOrder
    country?: SortOrder
  }

  export type AuthorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ReaderCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    registrationDate?: SortOrder
  }

  export type ReaderAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ReaderMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    registrationDate?: SortOrder
  }

  export type ReaderMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    registrationDate?: SortOrder
  }

  export type ReaderSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumLoanStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LoanStatus | EnumLoanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LoanStatus[] | ListEnumLoanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LoanStatus[] | ListEnumLoanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLoanStatusFilter<$PrismaModel> | $Enums.LoanStatus
  }

  export type ReaderScalarRelationFilter = {
    is?: ReaderWhereInput
    isNot?: ReaderWhereInput
  }

  export type BookScalarRelationFilter = {
    is?: BookWhereInput
    isNot?: BookWhereInput
  }

  export type LoanCountOrderByAggregateInput = {
    id?: SortOrder
    readerId?: SortOrder
    bookId?: SortOrder
    issueDate?: SortOrder
    returnDate?: SortOrder
    status?: SortOrder
  }

  export type LoanAvgOrderByAggregateInput = {
    id?: SortOrder
    readerId?: SortOrder
    bookId?: SortOrder
  }

  export type LoanMaxOrderByAggregateInput = {
    id?: SortOrder
    readerId?: SortOrder
    bookId?: SortOrder
    issueDate?: SortOrder
    returnDate?: SortOrder
    status?: SortOrder
  }

  export type LoanMinOrderByAggregateInput = {
    id?: SortOrder
    readerId?: SortOrder
    bookId?: SortOrder
    issueDate?: SortOrder
    returnDate?: SortOrder
    status?: SortOrder
  }

  export type LoanSumOrderByAggregateInput = {
    id?: SortOrder
    readerId?: SortOrder
    bookId?: SortOrder
  }

  export type EnumLoanStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LoanStatus | EnumLoanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LoanStatus[] | ListEnumLoanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LoanStatus[] | ListEnumLoanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLoanStatusWithAggregatesFilter<$PrismaModel> | $Enums.LoanStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLoanStatusFilter<$PrismaModel>
    _max?: NestedEnumLoanStatusFilter<$PrismaModel>
  }

  export type GenreCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GenreAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GenreMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GenreMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GenreSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GenreScalarRelationFilter = {
    is?: GenreWhereInput
    isNot?: GenreWhereInput
  }

  export type BookGenreBookIdGenreIdCompoundUniqueInput = {
    bookId: number
    genreId: number
  }

  export type BookGenreCountOrderByAggregateInput = {
    bookId?: SortOrder
    genreId?: SortOrder
  }

  export type BookGenreAvgOrderByAggregateInput = {
    bookId?: SortOrder
    genreId?: SortOrder
  }

  export type BookGenreMaxOrderByAggregateInput = {
    bookId?: SortOrder
    genreId?: SortOrder
  }

  export type BookGenreMinOrderByAggregateInput = {
    bookId?: SortOrder
    genreId?: SortOrder
  }

  export type BookGenreSumOrderByAggregateInput = {
    bookId?: SortOrder
    genreId?: SortOrder
  }

  export type PublisherCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
  }

  export type PublisherAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PublisherMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
  }

  export type PublisherMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
  }

  export type PublisherSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AuthorCreateNestedOneWithoutBooksInput = {
    create?: XOR<AuthorCreateWithoutBooksInput, AuthorUncheckedCreateWithoutBooksInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutBooksInput
    connect?: AuthorWhereUniqueInput
  }

  export type PublisherCreateNestedOneWithoutBooksInput = {
    create?: XOR<PublisherCreateWithoutBooksInput, PublisherUncheckedCreateWithoutBooksInput>
    connectOrCreate?: PublisherCreateOrConnectWithoutBooksInput
    connect?: PublisherWhereUniqueInput
  }

  export type BookGenreCreateNestedManyWithoutBookInput = {
    create?: XOR<BookGenreCreateWithoutBookInput, BookGenreUncheckedCreateWithoutBookInput> | BookGenreCreateWithoutBookInput[] | BookGenreUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookGenreCreateOrConnectWithoutBookInput | BookGenreCreateOrConnectWithoutBookInput[]
    createMany?: BookGenreCreateManyBookInputEnvelope
    connect?: BookGenreWhereUniqueInput | BookGenreWhereUniqueInput[]
  }

  export type LoanCreateNestedManyWithoutBookInput = {
    create?: XOR<LoanCreateWithoutBookInput, LoanUncheckedCreateWithoutBookInput> | LoanCreateWithoutBookInput[] | LoanUncheckedCreateWithoutBookInput[]
    connectOrCreate?: LoanCreateOrConnectWithoutBookInput | LoanCreateOrConnectWithoutBookInput[]
    createMany?: LoanCreateManyBookInputEnvelope
    connect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
  }

  export type BookGenreUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<BookGenreCreateWithoutBookInput, BookGenreUncheckedCreateWithoutBookInput> | BookGenreCreateWithoutBookInput[] | BookGenreUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookGenreCreateOrConnectWithoutBookInput | BookGenreCreateOrConnectWithoutBookInput[]
    createMany?: BookGenreCreateManyBookInputEnvelope
    connect?: BookGenreWhereUniqueInput | BookGenreWhereUniqueInput[]
  }

  export type LoanUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<LoanCreateWithoutBookInput, LoanUncheckedCreateWithoutBookInput> | LoanCreateWithoutBookInput[] | LoanUncheckedCreateWithoutBookInput[]
    connectOrCreate?: LoanCreateOrConnectWithoutBookInput | LoanCreateOrConnectWithoutBookInput[]
    createMany?: LoanCreateManyBookInputEnvelope
    connect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AuthorUpdateOneRequiredWithoutBooksNestedInput = {
    create?: XOR<AuthorCreateWithoutBooksInput, AuthorUncheckedCreateWithoutBooksInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutBooksInput
    upsert?: AuthorUpsertWithoutBooksInput
    connect?: AuthorWhereUniqueInput
    update?: XOR<XOR<AuthorUpdateToOneWithWhereWithoutBooksInput, AuthorUpdateWithoutBooksInput>, AuthorUncheckedUpdateWithoutBooksInput>
  }

  export type PublisherUpdateOneRequiredWithoutBooksNestedInput = {
    create?: XOR<PublisherCreateWithoutBooksInput, PublisherUncheckedCreateWithoutBooksInput>
    connectOrCreate?: PublisherCreateOrConnectWithoutBooksInput
    upsert?: PublisherUpsertWithoutBooksInput
    connect?: PublisherWhereUniqueInput
    update?: XOR<XOR<PublisherUpdateToOneWithWhereWithoutBooksInput, PublisherUpdateWithoutBooksInput>, PublisherUncheckedUpdateWithoutBooksInput>
  }

  export type BookGenreUpdateManyWithoutBookNestedInput = {
    create?: XOR<BookGenreCreateWithoutBookInput, BookGenreUncheckedCreateWithoutBookInput> | BookGenreCreateWithoutBookInput[] | BookGenreUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookGenreCreateOrConnectWithoutBookInput | BookGenreCreateOrConnectWithoutBookInput[]
    upsert?: BookGenreUpsertWithWhereUniqueWithoutBookInput | BookGenreUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BookGenreCreateManyBookInputEnvelope
    set?: BookGenreWhereUniqueInput | BookGenreWhereUniqueInput[]
    disconnect?: BookGenreWhereUniqueInput | BookGenreWhereUniqueInput[]
    delete?: BookGenreWhereUniqueInput | BookGenreWhereUniqueInput[]
    connect?: BookGenreWhereUniqueInput | BookGenreWhereUniqueInput[]
    update?: BookGenreUpdateWithWhereUniqueWithoutBookInput | BookGenreUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BookGenreUpdateManyWithWhereWithoutBookInput | BookGenreUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BookGenreScalarWhereInput | BookGenreScalarWhereInput[]
  }

  export type LoanUpdateManyWithoutBookNestedInput = {
    create?: XOR<LoanCreateWithoutBookInput, LoanUncheckedCreateWithoutBookInput> | LoanCreateWithoutBookInput[] | LoanUncheckedCreateWithoutBookInput[]
    connectOrCreate?: LoanCreateOrConnectWithoutBookInput | LoanCreateOrConnectWithoutBookInput[]
    upsert?: LoanUpsertWithWhereUniqueWithoutBookInput | LoanUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: LoanCreateManyBookInputEnvelope
    set?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    disconnect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    delete?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    connect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    update?: LoanUpdateWithWhereUniqueWithoutBookInput | LoanUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: LoanUpdateManyWithWhereWithoutBookInput | LoanUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: LoanScalarWhereInput | LoanScalarWhereInput[]
  }

  export type BookGenreUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<BookGenreCreateWithoutBookInput, BookGenreUncheckedCreateWithoutBookInput> | BookGenreCreateWithoutBookInput[] | BookGenreUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookGenreCreateOrConnectWithoutBookInput | BookGenreCreateOrConnectWithoutBookInput[]
    upsert?: BookGenreUpsertWithWhereUniqueWithoutBookInput | BookGenreUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BookGenreCreateManyBookInputEnvelope
    set?: BookGenreWhereUniqueInput | BookGenreWhereUniqueInput[]
    disconnect?: BookGenreWhereUniqueInput | BookGenreWhereUniqueInput[]
    delete?: BookGenreWhereUniqueInput | BookGenreWhereUniqueInput[]
    connect?: BookGenreWhereUniqueInput | BookGenreWhereUniqueInput[]
    update?: BookGenreUpdateWithWhereUniqueWithoutBookInput | BookGenreUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BookGenreUpdateManyWithWhereWithoutBookInput | BookGenreUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BookGenreScalarWhereInput | BookGenreScalarWhereInput[]
  }

  export type LoanUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<LoanCreateWithoutBookInput, LoanUncheckedCreateWithoutBookInput> | LoanCreateWithoutBookInput[] | LoanUncheckedCreateWithoutBookInput[]
    connectOrCreate?: LoanCreateOrConnectWithoutBookInput | LoanCreateOrConnectWithoutBookInput[]
    upsert?: LoanUpsertWithWhereUniqueWithoutBookInput | LoanUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: LoanCreateManyBookInputEnvelope
    set?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    disconnect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    delete?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    connect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    update?: LoanUpdateWithWhereUniqueWithoutBookInput | LoanUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: LoanUpdateManyWithWhereWithoutBookInput | LoanUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: LoanScalarWhereInput | LoanScalarWhereInput[]
  }

  export type BookCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BookCreateWithoutAuthorInput, BookUncheckedCreateWithoutAuthorInput> | BookCreateWithoutAuthorInput[] | BookUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BookCreateOrConnectWithoutAuthorInput | BookCreateOrConnectWithoutAuthorInput[]
    createMany?: BookCreateManyAuthorInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type BookUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BookCreateWithoutAuthorInput, BookUncheckedCreateWithoutAuthorInput> | BookCreateWithoutAuthorInput[] | BookUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BookCreateOrConnectWithoutAuthorInput | BookCreateOrConnectWithoutAuthorInput[]
    createMany?: BookCreateManyAuthorInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BookUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BookCreateWithoutAuthorInput, BookUncheckedCreateWithoutAuthorInput> | BookCreateWithoutAuthorInput[] | BookUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BookCreateOrConnectWithoutAuthorInput | BookCreateOrConnectWithoutAuthorInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutAuthorInput | BookUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BookCreateManyAuthorInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutAuthorInput | BookUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BookUpdateManyWithWhereWithoutAuthorInput | BookUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type BookUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BookCreateWithoutAuthorInput, BookUncheckedCreateWithoutAuthorInput> | BookCreateWithoutAuthorInput[] | BookUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BookCreateOrConnectWithoutAuthorInput | BookCreateOrConnectWithoutAuthorInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutAuthorInput | BookUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BookCreateManyAuthorInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutAuthorInput | BookUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BookUpdateManyWithWhereWithoutAuthorInput | BookUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type LoanCreateNestedManyWithoutReaderInput = {
    create?: XOR<LoanCreateWithoutReaderInput, LoanUncheckedCreateWithoutReaderInput> | LoanCreateWithoutReaderInput[] | LoanUncheckedCreateWithoutReaderInput[]
    connectOrCreate?: LoanCreateOrConnectWithoutReaderInput | LoanCreateOrConnectWithoutReaderInput[]
    createMany?: LoanCreateManyReaderInputEnvelope
    connect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
  }

  export type LoanUncheckedCreateNestedManyWithoutReaderInput = {
    create?: XOR<LoanCreateWithoutReaderInput, LoanUncheckedCreateWithoutReaderInput> | LoanCreateWithoutReaderInput[] | LoanUncheckedCreateWithoutReaderInput[]
    connectOrCreate?: LoanCreateOrConnectWithoutReaderInput | LoanCreateOrConnectWithoutReaderInput[]
    createMany?: LoanCreateManyReaderInputEnvelope
    connect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LoanUpdateManyWithoutReaderNestedInput = {
    create?: XOR<LoanCreateWithoutReaderInput, LoanUncheckedCreateWithoutReaderInput> | LoanCreateWithoutReaderInput[] | LoanUncheckedCreateWithoutReaderInput[]
    connectOrCreate?: LoanCreateOrConnectWithoutReaderInput | LoanCreateOrConnectWithoutReaderInput[]
    upsert?: LoanUpsertWithWhereUniqueWithoutReaderInput | LoanUpsertWithWhereUniqueWithoutReaderInput[]
    createMany?: LoanCreateManyReaderInputEnvelope
    set?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    disconnect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    delete?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    connect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    update?: LoanUpdateWithWhereUniqueWithoutReaderInput | LoanUpdateWithWhereUniqueWithoutReaderInput[]
    updateMany?: LoanUpdateManyWithWhereWithoutReaderInput | LoanUpdateManyWithWhereWithoutReaderInput[]
    deleteMany?: LoanScalarWhereInput | LoanScalarWhereInput[]
  }

  export type LoanUncheckedUpdateManyWithoutReaderNestedInput = {
    create?: XOR<LoanCreateWithoutReaderInput, LoanUncheckedCreateWithoutReaderInput> | LoanCreateWithoutReaderInput[] | LoanUncheckedCreateWithoutReaderInput[]
    connectOrCreate?: LoanCreateOrConnectWithoutReaderInput | LoanCreateOrConnectWithoutReaderInput[]
    upsert?: LoanUpsertWithWhereUniqueWithoutReaderInput | LoanUpsertWithWhereUniqueWithoutReaderInput[]
    createMany?: LoanCreateManyReaderInputEnvelope
    set?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    disconnect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    delete?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    connect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    update?: LoanUpdateWithWhereUniqueWithoutReaderInput | LoanUpdateWithWhereUniqueWithoutReaderInput[]
    updateMany?: LoanUpdateManyWithWhereWithoutReaderInput | LoanUpdateManyWithWhereWithoutReaderInput[]
    deleteMany?: LoanScalarWhereInput | LoanScalarWhereInput[]
  }

  export type ReaderCreateNestedOneWithoutLoansInput = {
    create?: XOR<ReaderCreateWithoutLoansInput, ReaderUncheckedCreateWithoutLoansInput>
    connectOrCreate?: ReaderCreateOrConnectWithoutLoansInput
    connect?: ReaderWhereUniqueInput
  }

  export type BookCreateNestedOneWithoutLoansInput = {
    create?: XOR<BookCreateWithoutLoansInput, BookUncheckedCreateWithoutLoansInput>
    connectOrCreate?: BookCreateOrConnectWithoutLoansInput
    connect?: BookWhereUniqueInput
  }

  export type EnumLoanStatusFieldUpdateOperationsInput = {
    set?: $Enums.LoanStatus
  }

  export type ReaderUpdateOneRequiredWithoutLoansNestedInput = {
    create?: XOR<ReaderCreateWithoutLoansInput, ReaderUncheckedCreateWithoutLoansInput>
    connectOrCreate?: ReaderCreateOrConnectWithoutLoansInput
    upsert?: ReaderUpsertWithoutLoansInput
    connect?: ReaderWhereUniqueInput
    update?: XOR<XOR<ReaderUpdateToOneWithWhereWithoutLoansInput, ReaderUpdateWithoutLoansInput>, ReaderUncheckedUpdateWithoutLoansInput>
  }

  export type BookUpdateOneRequiredWithoutLoansNestedInput = {
    create?: XOR<BookCreateWithoutLoansInput, BookUncheckedCreateWithoutLoansInput>
    connectOrCreate?: BookCreateOrConnectWithoutLoansInput
    upsert?: BookUpsertWithoutLoansInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutLoansInput, BookUpdateWithoutLoansInput>, BookUncheckedUpdateWithoutLoansInput>
  }

  export type BookGenreCreateNestedManyWithoutGenreInput = {
    create?: XOR<BookGenreCreateWithoutGenreInput, BookGenreUncheckedCreateWithoutGenreInput> | BookGenreCreateWithoutGenreInput[] | BookGenreUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: BookGenreCreateOrConnectWithoutGenreInput | BookGenreCreateOrConnectWithoutGenreInput[]
    createMany?: BookGenreCreateManyGenreInputEnvelope
    connect?: BookGenreWhereUniqueInput | BookGenreWhereUniqueInput[]
  }

  export type BookGenreUncheckedCreateNestedManyWithoutGenreInput = {
    create?: XOR<BookGenreCreateWithoutGenreInput, BookGenreUncheckedCreateWithoutGenreInput> | BookGenreCreateWithoutGenreInput[] | BookGenreUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: BookGenreCreateOrConnectWithoutGenreInput | BookGenreCreateOrConnectWithoutGenreInput[]
    createMany?: BookGenreCreateManyGenreInputEnvelope
    connect?: BookGenreWhereUniqueInput | BookGenreWhereUniqueInput[]
  }

  export type BookGenreUpdateManyWithoutGenreNestedInput = {
    create?: XOR<BookGenreCreateWithoutGenreInput, BookGenreUncheckedCreateWithoutGenreInput> | BookGenreCreateWithoutGenreInput[] | BookGenreUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: BookGenreCreateOrConnectWithoutGenreInput | BookGenreCreateOrConnectWithoutGenreInput[]
    upsert?: BookGenreUpsertWithWhereUniqueWithoutGenreInput | BookGenreUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: BookGenreCreateManyGenreInputEnvelope
    set?: BookGenreWhereUniqueInput | BookGenreWhereUniqueInput[]
    disconnect?: BookGenreWhereUniqueInput | BookGenreWhereUniqueInput[]
    delete?: BookGenreWhereUniqueInput | BookGenreWhereUniqueInput[]
    connect?: BookGenreWhereUniqueInput | BookGenreWhereUniqueInput[]
    update?: BookGenreUpdateWithWhereUniqueWithoutGenreInput | BookGenreUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: BookGenreUpdateManyWithWhereWithoutGenreInput | BookGenreUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: BookGenreScalarWhereInput | BookGenreScalarWhereInput[]
  }

  export type BookGenreUncheckedUpdateManyWithoutGenreNestedInput = {
    create?: XOR<BookGenreCreateWithoutGenreInput, BookGenreUncheckedCreateWithoutGenreInput> | BookGenreCreateWithoutGenreInput[] | BookGenreUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: BookGenreCreateOrConnectWithoutGenreInput | BookGenreCreateOrConnectWithoutGenreInput[]
    upsert?: BookGenreUpsertWithWhereUniqueWithoutGenreInput | BookGenreUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: BookGenreCreateManyGenreInputEnvelope
    set?: BookGenreWhereUniqueInput | BookGenreWhereUniqueInput[]
    disconnect?: BookGenreWhereUniqueInput | BookGenreWhereUniqueInput[]
    delete?: BookGenreWhereUniqueInput | BookGenreWhereUniqueInput[]
    connect?: BookGenreWhereUniqueInput | BookGenreWhereUniqueInput[]
    update?: BookGenreUpdateWithWhereUniqueWithoutGenreInput | BookGenreUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: BookGenreUpdateManyWithWhereWithoutGenreInput | BookGenreUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: BookGenreScalarWhereInput | BookGenreScalarWhereInput[]
  }

  export type BookCreateNestedOneWithoutGenresInput = {
    create?: XOR<BookCreateWithoutGenresInput, BookUncheckedCreateWithoutGenresInput>
    connectOrCreate?: BookCreateOrConnectWithoutGenresInput
    connect?: BookWhereUniqueInput
  }

  export type GenreCreateNestedOneWithoutBooksInput = {
    create?: XOR<GenreCreateWithoutBooksInput, GenreUncheckedCreateWithoutBooksInput>
    connectOrCreate?: GenreCreateOrConnectWithoutBooksInput
    connect?: GenreWhereUniqueInput
  }

  export type BookUpdateOneRequiredWithoutGenresNestedInput = {
    create?: XOR<BookCreateWithoutGenresInput, BookUncheckedCreateWithoutGenresInput>
    connectOrCreate?: BookCreateOrConnectWithoutGenresInput
    upsert?: BookUpsertWithoutGenresInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutGenresInput, BookUpdateWithoutGenresInput>, BookUncheckedUpdateWithoutGenresInput>
  }

  export type GenreUpdateOneRequiredWithoutBooksNestedInput = {
    create?: XOR<GenreCreateWithoutBooksInput, GenreUncheckedCreateWithoutBooksInput>
    connectOrCreate?: GenreCreateOrConnectWithoutBooksInput
    upsert?: GenreUpsertWithoutBooksInput
    connect?: GenreWhereUniqueInput
    update?: XOR<XOR<GenreUpdateToOneWithWhereWithoutBooksInput, GenreUpdateWithoutBooksInput>, GenreUncheckedUpdateWithoutBooksInput>
  }

  export type BookCreateNestedManyWithoutPublisherInput = {
    create?: XOR<BookCreateWithoutPublisherInput, BookUncheckedCreateWithoutPublisherInput> | BookCreateWithoutPublisherInput[] | BookUncheckedCreateWithoutPublisherInput[]
    connectOrCreate?: BookCreateOrConnectWithoutPublisherInput | BookCreateOrConnectWithoutPublisherInput[]
    createMany?: BookCreateManyPublisherInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type BookUncheckedCreateNestedManyWithoutPublisherInput = {
    create?: XOR<BookCreateWithoutPublisherInput, BookUncheckedCreateWithoutPublisherInput> | BookCreateWithoutPublisherInput[] | BookUncheckedCreateWithoutPublisherInput[]
    connectOrCreate?: BookCreateOrConnectWithoutPublisherInput | BookCreateOrConnectWithoutPublisherInput[]
    createMany?: BookCreateManyPublisherInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type BookUpdateManyWithoutPublisherNestedInput = {
    create?: XOR<BookCreateWithoutPublisherInput, BookUncheckedCreateWithoutPublisherInput> | BookCreateWithoutPublisherInput[] | BookUncheckedCreateWithoutPublisherInput[]
    connectOrCreate?: BookCreateOrConnectWithoutPublisherInput | BookCreateOrConnectWithoutPublisherInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutPublisherInput | BookUpsertWithWhereUniqueWithoutPublisherInput[]
    createMany?: BookCreateManyPublisherInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutPublisherInput | BookUpdateWithWhereUniqueWithoutPublisherInput[]
    updateMany?: BookUpdateManyWithWhereWithoutPublisherInput | BookUpdateManyWithWhereWithoutPublisherInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type BookUncheckedUpdateManyWithoutPublisherNestedInput = {
    create?: XOR<BookCreateWithoutPublisherInput, BookUncheckedCreateWithoutPublisherInput> | BookCreateWithoutPublisherInput[] | BookUncheckedCreateWithoutPublisherInput[]
    connectOrCreate?: BookCreateOrConnectWithoutPublisherInput | BookCreateOrConnectWithoutPublisherInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutPublisherInput | BookUpsertWithWhereUniqueWithoutPublisherInput[]
    createMany?: BookCreateManyPublisherInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutPublisherInput | BookUpdateWithWhereUniqueWithoutPublisherInput[]
    updateMany?: BookUpdateManyWithWhereWithoutPublisherInput | BookUpdateManyWithWhereWithoutPublisherInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumLoanStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LoanStatus | EnumLoanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LoanStatus[] | ListEnumLoanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LoanStatus[] | ListEnumLoanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLoanStatusFilter<$PrismaModel> | $Enums.LoanStatus
  }

  export type NestedEnumLoanStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LoanStatus | EnumLoanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LoanStatus[] | ListEnumLoanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LoanStatus[] | ListEnumLoanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLoanStatusWithAggregatesFilter<$PrismaModel> | $Enums.LoanStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLoanStatusFilter<$PrismaModel>
    _max?: NestedEnumLoanStatusFilter<$PrismaModel>
  }

  export type AuthorCreateWithoutBooksInput = {
    firstName: string
    lastName: string
    birthDate?: Date | string | null
    country: string
  }

  export type AuthorUncheckedCreateWithoutBooksInput = {
    id?: number
    firstName: string
    lastName: string
    birthDate?: Date | string | null
    country: string
  }

  export type AuthorCreateOrConnectWithoutBooksInput = {
    where: AuthorWhereUniqueInput
    create: XOR<AuthorCreateWithoutBooksInput, AuthorUncheckedCreateWithoutBooksInput>
  }

  export type PublisherCreateWithoutBooksInput = {
    name: string
    address: string
    phone: string
  }

  export type PublisherUncheckedCreateWithoutBooksInput = {
    id?: number
    name: string
    address: string
    phone: string
  }

  export type PublisherCreateOrConnectWithoutBooksInput = {
    where: PublisherWhereUniqueInput
    create: XOR<PublisherCreateWithoutBooksInput, PublisherUncheckedCreateWithoutBooksInput>
  }

  export type BookGenreCreateWithoutBookInput = {
    genre: GenreCreateNestedOneWithoutBooksInput
  }

  export type BookGenreUncheckedCreateWithoutBookInput = {
    genreId: number
  }

  export type BookGenreCreateOrConnectWithoutBookInput = {
    where: BookGenreWhereUniqueInput
    create: XOR<BookGenreCreateWithoutBookInput, BookGenreUncheckedCreateWithoutBookInput>
  }

  export type BookGenreCreateManyBookInputEnvelope = {
    data: BookGenreCreateManyBookInput | BookGenreCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type LoanCreateWithoutBookInput = {
    issueDate: Date | string
    returnDate?: Date | string | null
    status: $Enums.LoanStatus
    reader: ReaderCreateNestedOneWithoutLoansInput
  }

  export type LoanUncheckedCreateWithoutBookInput = {
    id?: number
    readerId: number
    issueDate: Date | string
    returnDate?: Date | string | null
    status: $Enums.LoanStatus
  }

  export type LoanCreateOrConnectWithoutBookInput = {
    where: LoanWhereUniqueInput
    create: XOR<LoanCreateWithoutBookInput, LoanUncheckedCreateWithoutBookInput>
  }

  export type LoanCreateManyBookInputEnvelope = {
    data: LoanCreateManyBookInput | LoanCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type AuthorUpsertWithoutBooksInput = {
    update: XOR<AuthorUpdateWithoutBooksInput, AuthorUncheckedUpdateWithoutBooksInput>
    create: XOR<AuthorCreateWithoutBooksInput, AuthorUncheckedCreateWithoutBooksInput>
    where?: AuthorWhereInput
  }

  export type AuthorUpdateToOneWithWhereWithoutBooksInput = {
    where?: AuthorWhereInput
    data: XOR<AuthorUpdateWithoutBooksInput, AuthorUncheckedUpdateWithoutBooksInput>
  }

  export type AuthorUpdateWithoutBooksInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: StringFieldUpdateOperationsInput | string
  }

  export type AuthorUncheckedUpdateWithoutBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: StringFieldUpdateOperationsInput | string
  }

  export type PublisherUpsertWithoutBooksInput = {
    update: XOR<PublisherUpdateWithoutBooksInput, PublisherUncheckedUpdateWithoutBooksInput>
    create: XOR<PublisherCreateWithoutBooksInput, PublisherUncheckedCreateWithoutBooksInput>
    where?: PublisherWhereInput
  }

  export type PublisherUpdateToOneWithWhereWithoutBooksInput = {
    where?: PublisherWhereInput
    data: XOR<PublisherUpdateWithoutBooksInput, PublisherUncheckedUpdateWithoutBooksInput>
  }

  export type PublisherUpdateWithoutBooksInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type PublisherUncheckedUpdateWithoutBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type BookGenreUpsertWithWhereUniqueWithoutBookInput = {
    where: BookGenreWhereUniqueInput
    update: XOR<BookGenreUpdateWithoutBookInput, BookGenreUncheckedUpdateWithoutBookInput>
    create: XOR<BookGenreCreateWithoutBookInput, BookGenreUncheckedCreateWithoutBookInput>
  }

  export type BookGenreUpdateWithWhereUniqueWithoutBookInput = {
    where: BookGenreWhereUniqueInput
    data: XOR<BookGenreUpdateWithoutBookInput, BookGenreUncheckedUpdateWithoutBookInput>
  }

  export type BookGenreUpdateManyWithWhereWithoutBookInput = {
    where: BookGenreScalarWhereInput
    data: XOR<BookGenreUpdateManyMutationInput, BookGenreUncheckedUpdateManyWithoutBookInput>
  }

  export type BookGenreScalarWhereInput = {
    AND?: BookGenreScalarWhereInput | BookGenreScalarWhereInput[]
    OR?: BookGenreScalarWhereInput[]
    NOT?: BookGenreScalarWhereInput | BookGenreScalarWhereInput[]
    bookId?: IntFilter<"BookGenre"> | number
    genreId?: IntFilter<"BookGenre"> | number
  }

  export type LoanUpsertWithWhereUniqueWithoutBookInput = {
    where: LoanWhereUniqueInput
    update: XOR<LoanUpdateWithoutBookInput, LoanUncheckedUpdateWithoutBookInput>
    create: XOR<LoanCreateWithoutBookInput, LoanUncheckedCreateWithoutBookInput>
  }

  export type LoanUpdateWithWhereUniqueWithoutBookInput = {
    where: LoanWhereUniqueInput
    data: XOR<LoanUpdateWithoutBookInput, LoanUncheckedUpdateWithoutBookInput>
  }

  export type LoanUpdateManyWithWhereWithoutBookInput = {
    where: LoanScalarWhereInput
    data: XOR<LoanUpdateManyMutationInput, LoanUncheckedUpdateManyWithoutBookInput>
  }

  export type LoanScalarWhereInput = {
    AND?: LoanScalarWhereInput | LoanScalarWhereInput[]
    OR?: LoanScalarWhereInput[]
    NOT?: LoanScalarWhereInput | LoanScalarWhereInput[]
    id?: IntFilter<"Loan"> | number
    readerId?: IntFilter<"Loan"> | number
    bookId?: IntFilter<"Loan"> | number
    issueDate?: DateTimeFilter<"Loan"> | Date | string
    returnDate?: DateTimeNullableFilter<"Loan"> | Date | string | null
    status?: EnumLoanStatusFilter<"Loan"> | $Enums.LoanStatus
  }

  export type BookCreateWithoutAuthorInput = {
    title: string
    year: number
    publisher: PublisherCreateNestedOneWithoutBooksInput
    genres?: BookGenreCreateNestedManyWithoutBookInput
    loans?: LoanCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutAuthorInput = {
    id?: number
    title: string
    publisherId: number
    year: number
    genres?: BookGenreUncheckedCreateNestedManyWithoutBookInput
    loans?: LoanUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutAuthorInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutAuthorInput, BookUncheckedCreateWithoutAuthorInput>
  }

  export type BookCreateManyAuthorInputEnvelope = {
    data: BookCreateManyAuthorInput | BookCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type BookUpsertWithWhereUniqueWithoutAuthorInput = {
    where: BookWhereUniqueInput
    update: XOR<BookUpdateWithoutAuthorInput, BookUncheckedUpdateWithoutAuthorInput>
    create: XOR<BookCreateWithoutAuthorInput, BookUncheckedCreateWithoutAuthorInput>
  }

  export type BookUpdateWithWhereUniqueWithoutAuthorInput = {
    where: BookWhereUniqueInput
    data: XOR<BookUpdateWithoutAuthorInput, BookUncheckedUpdateWithoutAuthorInput>
  }

  export type BookUpdateManyWithWhereWithoutAuthorInput = {
    where: BookScalarWhereInput
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyWithoutAuthorInput>
  }

  export type BookScalarWhereInput = {
    AND?: BookScalarWhereInput | BookScalarWhereInput[]
    OR?: BookScalarWhereInput[]
    NOT?: BookScalarWhereInput | BookScalarWhereInput[]
    id?: IntFilter<"Book"> | number
    title?: StringFilter<"Book"> | string
    authorId?: IntFilter<"Book"> | number
    publisherId?: IntFilter<"Book"> | number
    year?: IntFilter<"Book"> | number
  }

  export type LoanCreateWithoutReaderInput = {
    issueDate: Date | string
    returnDate?: Date | string | null
    status: $Enums.LoanStatus
    book: BookCreateNestedOneWithoutLoansInput
  }

  export type LoanUncheckedCreateWithoutReaderInput = {
    id?: number
    bookId: number
    issueDate: Date | string
    returnDate?: Date | string | null
    status: $Enums.LoanStatus
  }

  export type LoanCreateOrConnectWithoutReaderInput = {
    where: LoanWhereUniqueInput
    create: XOR<LoanCreateWithoutReaderInput, LoanUncheckedCreateWithoutReaderInput>
  }

  export type LoanCreateManyReaderInputEnvelope = {
    data: LoanCreateManyReaderInput | LoanCreateManyReaderInput[]
    skipDuplicates?: boolean
  }

  export type LoanUpsertWithWhereUniqueWithoutReaderInput = {
    where: LoanWhereUniqueInput
    update: XOR<LoanUpdateWithoutReaderInput, LoanUncheckedUpdateWithoutReaderInput>
    create: XOR<LoanCreateWithoutReaderInput, LoanUncheckedCreateWithoutReaderInput>
  }

  export type LoanUpdateWithWhereUniqueWithoutReaderInput = {
    where: LoanWhereUniqueInput
    data: XOR<LoanUpdateWithoutReaderInput, LoanUncheckedUpdateWithoutReaderInput>
  }

  export type LoanUpdateManyWithWhereWithoutReaderInput = {
    where: LoanScalarWhereInput
    data: XOR<LoanUpdateManyMutationInput, LoanUncheckedUpdateManyWithoutReaderInput>
  }

  export type ReaderCreateWithoutLoansInput = {
    firstName: string
    lastName: string
    address: string
    phone: string
    registrationDate?: Date | string
  }

  export type ReaderUncheckedCreateWithoutLoansInput = {
    id?: number
    firstName: string
    lastName: string
    address: string
    phone: string
    registrationDate?: Date | string
  }

  export type ReaderCreateOrConnectWithoutLoansInput = {
    where: ReaderWhereUniqueInput
    create: XOR<ReaderCreateWithoutLoansInput, ReaderUncheckedCreateWithoutLoansInput>
  }

  export type BookCreateWithoutLoansInput = {
    title: string
    year: number
    author: AuthorCreateNestedOneWithoutBooksInput
    publisher: PublisherCreateNestedOneWithoutBooksInput
    genres?: BookGenreCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutLoansInput = {
    id?: number
    title: string
    authorId: number
    publisherId: number
    year: number
    genres?: BookGenreUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutLoansInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutLoansInput, BookUncheckedCreateWithoutLoansInput>
  }

  export type ReaderUpsertWithoutLoansInput = {
    update: XOR<ReaderUpdateWithoutLoansInput, ReaderUncheckedUpdateWithoutLoansInput>
    create: XOR<ReaderCreateWithoutLoansInput, ReaderUncheckedCreateWithoutLoansInput>
    where?: ReaderWhereInput
  }

  export type ReaderUpdateToOneWithWhereWithoutLoansInput = {
    where?: ReaderWhereInput
    data: XOR<ReaderUpdateWithoutLoansInput, ReaderUncheckedUpdateWithoutLoansInput>
  }

  export type ReaderUpdateWithoutLoansInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReaderUncheckedUpdateWithoutLoansInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookUpsertWithoutLoansInput = {
    update: XOR<BookUpdateWithoutLoansInput, BookUncheckedUpdateWithoutLoansInput>
    create: XOR<BookCreateWithoutLoansInput, BookUncheckedCreateWithoutLoansInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutLoansInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutLoansInput, BookUncheckedUpdateWithoutLoansInput>
  }

  export type BookUpdateWithoutLoansInput = {
    title?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    author?: AuthorUpdateOneRequiredWithoutBooksNestedInput
    publisher?: PublisherUpdateOneRequiredWithoutBooksNestedInput
    genres?: BookGenreUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutLoansInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    publisherId?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    genres?: BookGenreUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookGenreCreateWithoutGenreInput = {
    book: BookCreateNestedOneWithoutGenresInput
  }

  export type BookGenreUncheckedCreateWithoutGenreInput = {
    bookId: number
  }

  export type BookGenreCreateOrConnectWithoutGenreInput = {
    where: BookGenreWhereUniqueInput
    create: XOR<BookGenreCreateWithoutGenreInput, BookGenreUncheckedCreateWithoutGenreInput>
  }

  export type BookGenreCreateManyGenreInputEnvelope = {
    data: BookGenreCreateManyGenreInput | BookGenreCreateManyGenreInput[]
    skipDuplicates?: boolean
  }

  export type BookGenreUpsertWithWhereUniqueWithoutGenreInput = {
    where: BookGenreWhereUniqueInput
    update: XOR<BookGenreUpdateWithoutGenreInput, BookGenreUncheckedUpdateWithoutGenreInput>
    create: XOR<BookGenreCreateWithoutGenreInput, BookGenreUncheckedCreateWithoutGenreInput>
  }

  export type BookGenreUpdateWithWhereUniqueWithoutGenreInput = {
    where: BookGenreWhereUniqueInput
    data: XOR<BookGenreUpdateWithoutGenreInput, BookGenreUncheckedUpdateWithoutGenreInput>
  }

  export type BookGenreUpdateManyWithWhereWithoutGenreInput = {
    where: BookGenreScalarWhereInput
    data: XOR<BookGenreUpdateManyMutationInput, BookGenreUncheckedUpdateManyWithoutGenreInput>
  }

  export type BookCreateWithoutGenresInput = {
    title: string
    year: number
    author: AuthorCreateNestedOneWithoutBooksInput
    publisher: PublisherCreateNestedOneWithoutBooksInput
    loans?: LoanCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutGenresInput = {
    id?: number
    title: string
    authorId: number
    publisherId: number
    year: number
    loans?: LoanUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutGenresInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutGenresInput, BookUncheckedCreateWithoutGenresInput>
  }

  export type GenreCreateWithoutBooksInput = {
    name: string
  }

  export type GenreUncheckedCreateWithoutBooksInput = {
    id?: number
    name: string
  }

  export type GenreCreateOrConnectWithoutBooksInput = {
    where: GenreWhereUniqueInput
    create: XOR<GenreCreateWithoutBooksInput, GenreUncheckedCreateWithoutBooksInput>
  }

  export type BookUpsertWithoutGenresInput = {
    update: XOR<BookUpdateWithoutGenresInput, BookUncheckedUpdateWithoutGenresInput>
    create: XOR<BookCreateWithoutGenresInput, BookUncheckedCreateWithoutGenresInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutGenresInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutGenresInput, BookUncheckedUpdateWithoutGenresInput>
  }

  export type BookUpdateWithoutGenresInput = {
    title?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    author?: AuthorUpdateOneRequiredWithoutBooksNestedInput
    publisher?: PublisherUpdateOneRequiredWithoutBooksNestedInput
    loans?: LoanUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutGenresInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    publisherId?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    loans?: LoanUncheckedUpdateManyWithoutBookNestedInput
  }

  export type GenreUpsertWithoutBooksInput = {
    update: XOR<GenreUpdateWithoutBooksInput, GenreUncheckedUpdateWithoutBooksInput>
    create: XOR<GenreCreateWithoutBooksInput, GenreUncheckedCreateWithoutBooksInput>
    where?: GenreWhereInput
  }

  export type GenreUpdateToOneWithWhereWithoutBooksInput = {
    where?: GenreWhereInput
    data: XOR<GenreUpdateWithoutBooksInput, GenreUncheckedUpdateWithoutBooksInput>
  }

  export type GenreUpdateWithoutBooksInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenreUncheckedUpdateWithoutBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BookCreateWithoutPublisherInput = {
    title: string
    year: number
    author: AuthorCreateNestedOneWithoutBooksInput
    genres?: BookGenreCreateNestedManyWithoutBookInput
    loans?: LoanCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutPublisherInput = {
    id?: number
    title: string
    authorId: number
    year: number
    genres?: BookGenreUncheckedCreateNestedManyWithoutBookInput
    loans?: LoanUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutPublisherInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutPublisherInput, BookUncheckedCreateWithoutPublisherInput>
  }

  export type BookCreateManyPublisherInputEnvelope = {
    data: BookCreateManyPublisherInput | BookCreateManyPublisherInput[]
    skipDuplicates?: boolean
  }

  export type BookUpsertWithWhereUniqueWithoutPublisherInput = {
    where: BookWhereUniqueInput
    update: XOR<BookUpdateWithoutPublisherInput, BookUncheckedUpdateWithoutPublisherInput>
    create: XOR<BookCreateWithoutPublisherInput, BookUncheckedCreateWithoutPublisherInput>
  }

  export type BookUpdateWithWhereUniqueWithoutPublisherInput = {
    where: BookWhereUniqueInput
    data: XOR<BookUpdateWithoutPublisherInput, BookUncheckedUpdateWithoutPublisherInput>
  }

  export type BookUpdateManyWithWhereWithoutPublisherInput = {
    where: BookScalarWhereInput
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyWithoutPublisherInput>
  }

  export type BookGenreCreateManyBookInput = {
    genreId: number
  }

  export type LoanCreateManyBookInput = {
    id?: number
    readerId: number
    issueDate: Date | string
    returnDate?: Date | string | null
    status: $Enums.LoanStatus
  }

  export type BookGenreUpdateWithoutBookInput = {
    genre?: GenreUpdateOneRequiredWithoutBooksNestedInput
  }

  export type BookGenreUncheckedUpdateWithoutBookInput = {
    genreId?: IntFieldUpdateOperationsInput | number
  }

  export type BookGenreUncheckedUpdateManyWithoutBookInput = {
    genreId?: IntFieldUpdateOperationsInput | number
  }

  export type LoanUpdateWithoutBookInput = {
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumLoanStatusFieldUpdateOperationsInput | $Enums.LoanStatus
    reader?: ReaderUpdateOneRequiredWithoutLoansNestedInput
  }

  export type LoanUncheckedUpdateWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    readerId?: IntFieldUpdateOperationsInput | number
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumLoanStatusFieldUpdateOperationsInput | $Enums.LoanStatus
  }

  export type LoanUncheckedUpdateManyWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    readerId?: IntFieldUpdateOperationsInput | number
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumLoanStatusFieldUpdateOperationsInput | $Enums.LoanStatus
  }

  export type BookCreateManyAuthorInput = {
    id?: number
    title: string
    publisherId: number
    year: number
  }

  export type BookUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    publisher?: PublisherUpdateOneRequiredWithoutBooksNestedInput
    genres?: BookGenreUpdateManyWithoutBookNestedInput
    loans?: LoanUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    publisherId?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    genres?: BookGenreUncheckedUpdateManyWithoutBookNestedInput
    loans?: LoanUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    publisherId?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
  }

  export type LoanCreateManyReaderInput = {
    id?: number
    bookId: number
    issueDate: Date | string
    returnDate?: Date | string | null
    status: $Enums.LoanStatus
  }

  export type LoanUpdateWithoutReaderInput = {
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumLoanStatusFieldUpdateOperationsInput | $Enums.LoanStatus
    book?: BookUpdateOneRequiredWithoutLoansNestedInput
  }

  export type LoanUncheckedUpdateWithoutReaderInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumLoanStatusFieldUpdateOperationsInput | $Enums.LoanStatus
  }

  export type LoanUncheckedUpdateManyWithoutReaderInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumLoanStatusFieldUpdateOperationsInput | $Enums.LoanStatus
  }

  export type BookGenreCreateManyGenreInput = {
    bookId: number
  }

  export type BookGenreUpdateWithoutGenreInput = {
    book?: BookUpdateOneRequiredWithoutGenresNestedInput
  }

  export type BookGenreUncheckedUpdateWithoutGenreInput = {
    bookId?: IntFieldUpdateOperationsInput | number
  }

  export type BookGenreUncheckedUpdateManyWithoutGenreInput = {
    bookId?: IntFieldUpdateOperationsInput | number
  }

  export type BookCreateManyPublisherInput = {
    id?: number
    title: string
    authorId: number
    year: number
  }

  export type BookUpdateWithoutPublisherInput = {
    title?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    author?: AuthorUpdateOneRequiredWithoutBooksNestedInput
    genres?: BookGenreUpdateManyWithoutBookNestedInput
    loans?: LoanUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutPublisherInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    genres?: BookGenreUncheckedUpdateManyWithoutBookNestedInput
    loans?: LoanUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateManyWithoutPublisherInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}