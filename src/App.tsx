import './App.css';

interface Topic {
  title: string;
  link: string;
  description: string;
}

interface Unit {
  topics: Topic[];
}

interface Table {
  [unit: number]: Unit;
}

function MyTable({ topics }: { topics: Table }) {
  return (
    <div className="MyTable">
        <table>
          <thead>
            <tr>
              <th>UNIT</th>
              <th>TOPICS</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(topics).map(([unit, data]) => (
              <tr key={unit}>
                <td>{unit}</td>
                <td>
                  <ul className="justified-text">
                    {data.topics.map((topic: Topic, index: number) => (
                      <li key={index}>
                        <b>{topic.title}: </b>
                        <a href={topic.link} target="_blank" rel="noopener noreferrer">{topic.description}</a>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
}

export default function MyApp() {
  const topics: Table = {
    1: {
      topics: [
        {
          title: "Introduction",
          link: "https://example.com/introduction",
          description: "The Programming Cycle for Python, Elements of Python, Type Conversion."
        },
        {
          title: "Basics",
          link: "https://example.com/basics",
          description: "Expressions, Assignment Statement, Arithmetic Operators, Operator Precedence, Boolean Expression."
        },
        {
          title: "Conditional Statements",
          link: "https://example.com/conditional-statements",
          description: "Conditional Statement in Python (if-else statement, its working and execution), Nested-if Statement and Else if Statement in Python, Expression Evaluation & Float Representation."
        },
        {
          title: "Loops",
          link: "https://example.com/loops",
          description: "Purpose and working of Loops, While Loop including its Working, For Loop, Nested Loops, Break and Continue."
        }
      ]
    },
    2: {
      topics: [
        {
          title: "Function",
          link: "https://example.com/function",
          description: "Parts of a Function, Execution of a Function, Keyword and Default Arguments, Scope Rules."
        },
        {
          title: "Strings",
          link: "https://example.com/strings",
          description: "Length of the string and perform concatenation and Repeat operations, Indexing and Slicing of Strings."
        },
        {
          title: "Python Data Structure",
          link: "https://example.com/python-data-structure",
          description: "Tuples, Unpacking Sequences, Lists, Mutable Sequences, List Comprehension, Sets, Dictionaries."
        },
        {
          title: "Higher Order Functions",
          link: "https://example.com/higher-order-functions",
          description: "Treat functions as first-class Objects, Lambda Expressions."
        }
      ]
    },
    3: {
      topics: [
        {
          title: "Abstract Data Types",
          link: "https://example.com/abstract-data-types",
          description: "Abstract data types and ADT interface in Python Programming."
        },
        {
          title: "Classes",
          link: "https://example.com/classes",
          description: "Class definition and other operations in the classes, Special Methods (such as _init_, _str_, comparison methods and Arithmetic methods etc.), Class Example, Inheritance, Inheritance and OOP."
        },
        {
          title: "Iterators & Recursion",
          link: "https://example.com/iterators-recursion",
          description: "Recursive Fibonacci, Tower of Hanoi."
        },
        {
          title: "Search",
          link: "https://example.com/search",
          description: "Simple Search and Estimating Search Time, Binary Search and Estimating Binary Search Time."
        },
        {
          title: "Sorting & Merging",
          link: "https://example.com/sorting-merging",
          description: "Selection Sort, Merge List, Merge Sort, Higher Order Sort."
        },
        {
          title: "File I/O",
          link: "https://example.com/file-io",
          description: "File input and output operations in Python Programming Exceptions and Assertions."
        },
        {
          title: "Modules",
          link: "https://example.com/modules",
          description: "Introduction and Importing Modules."
        }
      ]
    }
  };

  return (
    <div className="app-container">
      <h1>SYLLABUS</h1>
      <div className="w-min m-40 flex justify-center text-center">
        </div>
      <div className="table-wrapper">
        <MyTable topics={topics} />
      </div>
    </div>
  );
}
