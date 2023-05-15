# Groovy

Groovy is an object-oriented programming language that is designed to enhance and extend the Java programming language. It is dynamic, expressive, and offers numerous features and syntax shortcuts that make it easier to write concise and readable code. Groovy leverages the Java Virtual Machine (JVM) and seamlessly integrates with existing Java libraries and frameworks.

## Table of Contents

- [Groovy](#groovy)
  - [Table of Contents](#table-of-contents)
  - [Key features](#key-features)
  - [def Keyword](#def-keyword)
  - [Parenthesis Usage](#parenthesis-usage)
  - [Strings](#strings)
  - [Closures](#closures)
  - [Lists](#lists)
  - [Maps](#maps)
  - [File I/O](#file-io)
  - [Console I/O](#console-io)
  - [Math](#math)
  - [Random](#random)
  - [Executing Groovy scripts](#executing-groovy-scripts)

## Key features

1. **Dynamic Typing**: Groovy supports dynamic typing, allowing variables to be declared without specifying their types explicitly. This provides flexibility and reduces the amount of boilerplate code required.

2. **Scripting Capabilities**: Groovy is often used as a scripting language due to its concise syntax and scripting-friendly features. It allows you to write scripts without the need for a class or method structure.

3. **Closures**: Closures are a powerful feature in Groovy that enable the creation of anonymous code blocks. Closures can be assigned to variables, passed as arguments, and even stored in data structures.

4. **Seamless Java Integration**: Groovy interoperates with Java seamlessly. It can use existing Java libraries and frameworks without any hassle, and Java code can call Groovy code and vice versa.

5. **Extension Methods**: Groovy allows adding new methods to existing classes through the concept of extension methods. This feature enables you to enhance the functionality of classes without modifying their source code.

6. **Metaprogramming**: Groovy supports metaprogramming, which means you can modify the behavior of classes and objects at runtime. This opens up opportunities for dynamic code generation, DSLs, and other advanced techniques.

7. **DSL Support**: Domain-Specific Languages (DSLs) are well supported in Groovy. Its expressive syntax allows the creation of internal DSLs that provide a high level of abstraction for specific problem domains.

8. **Simplified Syntax**: Groovy simplifies Java syntax in many ways, such as optional semicolons, type inference, simplified collection literals, and more. These features help reduce boilerplate code and make the code more readable.

## def Keyword

The `def` keyword in Groovy is used for dynamic variable typing. It allows variables to be declared without explicitly specifying their types.

Example:

```groovy
def name = "John"
```

## Parenthesis Usage

Parentheses in Groovy are optional in certain cases, such as when calling methods with more than one argument or accessing properties.

Example:

```groovy
println "Hello, World!" // Parentheses are optional here
```

## Strings

Strings are widely used for representing text and manipulating textual data in programming. They provide a rich set of methods for working with text, making it easier to perform operations like searching, manipulating, and extracting substrings.

- `length()`: Returns the length of the string.
- `isEmpty()`: Checks if the string is empty.
- `toUpperCase()`: Converts the string to uppercase.
- `toLowerCase()`: Converts the string to lowercase.
- `trim()`: Removes leading and trailing whitespace from the string.
- `startsWith(prefix)`: Checks if the string starts with the specified prefix.
- `endsWith(suffix)`: Checks if the string ends with the specified suffix.
- `substring(startIndex)`: Returns a new string that is a substring of the original string, starting from the specified index.
- `substring(startIndex, endIndex)`: Returns a new string that is a substring of the original string, starting from the specified start index and ending at the specified end index (exclusive).
- `split(delimiter)`: Splits the string into an array of substrings based on the specified delimiter.
- `replace(oldValue, newValue)`: Replaces all occurrences of the old value with the new value in the string.
- `concat(string)`: Concatenates the specified string to the end of the current string.
- `charAt(index)`: Returns the character at the specified index in the string.
- `indexOf(substring)`: Returns the index of the first occurrence of the specified substring in the string, or -1 if not found.
- `lastIndexOf(substring)`: Returns the index of the last occurrence of the specified substring in the string, or -1 if not found.

```groovy
def name = "   John Doe   "
println(name.length()) // Output: 13
println(name.trim()) // Output: "John Doe"
println(name.toUpperCase()) // Output: "   JOHN DOE   "
println(name.startsWith("John")) // Output: false
println(name.endsWith("Doe")) // Output: true
println(name.substring(3, 8)) // Output: " John"
println(name.split(" ")) // Output: ["", "", "", "John", "Doe", "", "", ""]
println(name.replace("Doe", "Smith")) // Output: "   John Smith   "
println(name.indexOf("Doe")) // Output: 7
```

## Closures

Closures in Groovy are anonymous blocks of code that can be assigned to variables or passed as arguments to methods. They encapsulate behavior and can be executed later.

Example:

```groovy
def closure = { name -> "Hello, $name!" }
def result = closure("John") // result = "Hello, John!"
```

## Lists

Lists in Groovy are ordered collections that can hold elements of different types. They support various operations like adding, removing, and iterating over elements.

- `add(element)`: Adds an element to the end of the list.
- `add(index, element)`: Inserts an element at the specified index.
- `addAll(collection)`: Adds all elements of the specified collection to the end of the list.
- `clear()`: Removes all elements from the list.
- `contains(element)`: Checks if the list contains the specified element.
- `get(index)`: Returns the element at the specified index.
- `indexOf(element)`: Returns the index of the first occurrence of the specified element, or -1 if the list does not contain the element.
- `isEmpty()`: Checks if the list is empty.
- `iterator()`: Returns an iterator over the elements in the list.
- `remove(index)`: Removes the element at the specified index.
- `remove(element)`: Removes the first occurrence of the specified element from the list.
- `set(index, element)`: Replaces the element at the specified index with the specified element.
- `size()`: Returns the number of elements in the list.
- `sort()`: Sorts the list in ascending order.
- `toArray()`: Returns an array containing all elements in the list.

Example:

```groovy
def list = [1, 2, 3, 4]
list.add(5)
list.remove(2)
```

## Maps

Maps in Groovy are key-value pairs where keys and values can be of any type. They provide efficient lookups and allow easy manipulation of data.

- `put(key, value)`: Associates the specified value with the specified key in the map.
- `putAll(map)`: Copies all key-value pairs from the specified map to this map.
- `get(key)`: Returns the value to which the specified key is mapped, or null if the key is not present.
- `containsKey(key)`: Checks if the map contains the specified key.
- `containsValue(value)`: Checks if the map contains the specified value.
- `remove(key)`: Removes the mapping for the specified key from the map.
- `isEmpty()`: Checks if the map is empty.
- `size()`: Returns the number of key-value pairs in the map.
- `clear()`: Removes all key-value pairs from the map.
- `keySet()`: Returns a Set containing all keys in the map.
- `values()`: Returns a Collection containing all values in the map.
- `entrySet()`: Returns a Set containing all key-value pairs (entries) in the map.
- `getOrDefault(key, defaultValue)`: Returns the value to which the specified key is mapped, or a default value if the key is not present.

Example:

```groovy
def map = [name: "John", age: 30]
map.put("city", "New York")
map.remove("age")
```

## File I/O

Groovy offers convenient methods for file input/output operations. You can read from and write to files using a concise and expressive syntax.

- `text`: Reads the entire content of the file as a string.
- `bytes`: Reads the entire content of the file as a byte array.
- `eachLine(closure)`: Reads the file line by line, invoking the closure for each line.
- `readLines()`: Reads the file and returns a List containing all lines.
- `append(text)`: Appends the specified text to the end of the file.
- `write(text)`: Writes the specified text to the file, replacing its content.
- `withWriter(closure)`: Opens the file for writing, executes the closure, and automatically closes the file.
- `newReader()`: Creates a new BufferedReader for reading the file.
- `newWriter()`: Creates a new BufferedWriter for writing to the file.
- `exists()`: Checks if the file exists.
- `delete()`: Deletes the file.
- `renameTo(newName)`: Renames the file to the specified new name.

Example:

```groovy
def file = new File("data.txt")
def content = file.text // Read the entire file content
file.append("New line added.") // Append a new line to the file
println(file.exists()) // Check if the file exists
```

## Console I/O

Groovy provides methods to interact with the console and obtain user input during runtime.

- `System.console().readLine()`: Reads a line of text from the console and returns it as a string.
- `System.console().readPassword()`: Reads a line of text from the console without echoing the input (useful for reading passwords) and returns it as a character array.
- `System.console().reader()`: Returns a BufferedReader for reading text from the console.
- `System.console().writer()`: Returns a PrintWriter for writing text to the console.

```groovy
def name = System.console().readLine("Enter your name: ")
def age = System.console().readLine("Enter your age: ").toInteger()
println("Hello, $name! You are $age years old.")
```

## Math

- Constants:
  - `Math.PI`: The mathematical constant pi (approximately 3.141592653589793).
  - `Math.E`: The mathematical constant e (approximately 2.718281828459045).

- Basic Math Operations:
  - `Math.abs(x)`: Returns the absolute value of a number.
  - `Math.ceil(x)`: Returns the smallest integer greater than or equal to a given number.
  - `Math.floor(x)`: Returns the largest integer less than or equal to a given number.
  - `Math.round(x)`: Returns the closest integer to a given number.
  - `Math.max(x, y)`: Returns the larger of the two given numbers.
  - `Math.min(x, y)`: Returns the smaller of the two given numbers.
  - `Math.pow(x, y)`: Returns the value of x raised to the power of y.
  - `Math.sqrt(x)`: Returns the square root of a given number.

- Trigonometric Functions:
  - `Math.sin(x)`: Returns the sine of a given angle in radians.
  - `Math.cos(x)`: Returns the cosine of a given angle in radians.
  - `Math.tan(x)`: Returns the tangent of a given angle in radians.
  - `Math.asin(x)`: Returns the arc sine of a given value, in the range -π/2 to π/2.
  - `Math.acos(x)`: Returns the arc cosine of a given value, in the range 0 to π.
  - `Math.atan(x)`: Returns the arc tangent of a given value, in the range -π/2 to π/2.
  - `Math.atan2(y, x)`: Returns the angle theta from the conversion of rectangular coordinates (x, y) to polar coordinates (r, theta).

- Random Number Generation:
  - `Math.random()`: Returns a random number between 0 (inclusive) and 1 (exclusive).

Example:

```groovy
def x = -3.5
def y = 2.7

println(Math.abs(x)) // Output: 3.5
println(Math.ceil(x)) // Output: -3.0
println(Math.floor(x)) // Output: -4.0
println(Math.round(x)) // Output: -4
println(Math.max(x, y)) // Output: 2.7
println(Math.min(x, y)) // Output: -3.5
println(Math.pow(x, 2)) // Output: 12.25
println(Math.sqrt(y)) // Output: 1.6431676725154982
println(Math.sin(Math.PI/4)) // Output: 0.7071067811865475
println(Math.cos(Math.PI/3)) // Output: 0.5
println(Math.tan(Math.PI/6)) // Output: 0.5773502691896257
println(Math.random()) // Output: a random number between 0 and 1
```

These Math methods provide various mathematical operations for performing calculations and manipulating numerical values in Groovy.

## Random

In Groovy, you can generate random numbers using the `Random` class. Here are some common methods and techniques for generating random numbers:

1. Generating Random Integers:

   ```groovy
   def random = new Random()
   def randomInt = random.nextInt() // Generates a random integer
   def randomInRange = random.nextInt(max - min + 1) + min // Generates a random integer within a specified range (min to max)
   ```

2. Generating Random Floating-Point Numbers:

   ```groovy
   def random = new Random()
   def randomDouble = random.nextDouble() // Generates a random double between 0.0 (inclusive) and 1.0 (exclusive)
   def randomInRange = random.nextDouble() * (max - min) + min // Generates a random double within a specified range (min to max)
   ```

3. Random Boolean Values:

   ```groovy
   def random = new Random()
   def randomBoolean = random.nextBoolean() // Generates a random boolean value (true or false)
   ```

4. Shuffling an Array:

   ```groovy
   def array = [1, 2, 3, 4, 5]
   def random = new Random()
   random.shuffle(array) // Shuffles the elements of the array randomly
   ```

5. Randomly Selecting Elements from a List:

   ```groovy
   def list = ['apple', 'banana', 'orange', 'grape']
   def random = new Random()
   def randomElement = list.get(random.nextInt(list.size())) // Retrieves a random element from the list
   ```

> Note: Each time you run the code, the generated random numbers or shuffling results may vary.

## Executing Groovy scripts

You must have groovy installed on your local machine. You can install groovy by following steps documented on their official website, or you can use `SDKMAN!` to install groovy.

To run groovy scripts you can execute the following command.

```bash
groovy <script_name>.groovy
```
