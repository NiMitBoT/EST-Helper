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
            <th>TITLE</th>
            <th>DESCRIPTION</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(topics).map(([unit, data]) => (
            data.topics.map((topic: Topic, index: number) => (
              <tr key={`${unit}-${index}`}>
                <td>{unit}</td>
                <td>{topic.title}</td>
                <td>
                  <a href={topic.link} target="_blank" rel="noopener noreferrer">{topic.description}</a>
                </td>
              </tr>
            ))
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default function MyApp() {
  const pythonSyllabus: Table = {
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
          title: "Functions",
          link: "https://example.com/functions",
          description: "Function Definition, Calling Functions, Parameters, Arguments, Return Values."
        },
        {
          title: "Lists and Tuples",
          link: "https://example.com/lists-tuples",
          description: "Creating Lists, Indexing and Slicing, List Operations, Tuple Basics."
        },
        {
          title: "Dictionaries and Sets",
          link: "https://example.com/dictionaries-sets",
          description: "Dictionary Basics, Dictionary Operations, Set Basics, Set Operations."
        },
        {
          title: "File Handling",
          link: "https://example.com/file-handling",
          description: "Opening and Reading Files, Writing to Files, Working with CSV Files."
        }
      ]
    },
    3: {
      topics: [
        {
          title: "Classes and Objects",
          link: "https://example.com/classes-objects",
          description: "Class Definition, Class Objects, Instance Variables, Methods."
        },
        {
          title: "Inheritance and Polymorphism",
          link: "https://example.com/inheritance-polymorphism",
          description: "Inheritance Basics, Method Overriding, Polymorphism."
        },
        {
          title: "Exception Handling",
          link: "https://example.com/exception-handling",
          description: "Handling Exceptions, Try-Except Blocks, Finally Block, Custom Exceptions."
        },
        {
          title: "Modules and Packages",
          link: "https://example.com/modules-packages",
          description: "Module Creation, Importing Modules, Package Basics."
        }
      ]
    }
  };
  const DAA_Syllabus: Table = {
    1: {
      topics: [
        {
          title: "Basics of Algorithms",
          link: "https://example.com/basics-of-algorithms",
          description: "Analysis Framework: Worst, Average, and Best case analysis. Asymptotic notations: Oh notation, Omega notation, Theta notation. Algorithm performance analysis: Time and Space complexity. Analysis of iterative and recursive algorithms. Recurrence equations and their solution: substitution method & master theorem, recursion tree method."
        }
      ]
    },
    2: {
      topics: [
        {
          title: "Divide and Conquer",
          link: "https://example.com/divide-and-conquer",
          description: "Understanding of divide and conquer approach, Algorithms for Find Min and Max, Sorting, Quick Sort, 2 Way Merge Sort, heap sort. Searching: Linear Search and Binary Search. Strassen's matrix multiplication and convex hull. Decrease and Conquer Approach: Topological Sort."
        }
      ]
    },
    3: {
      topics: [
        {
          title: "Greedy Method and Dynamic Programming",
          link: "https://example.com/greedy-method-dynamic-programming",
          description: "Understanding of greedy approach, Greedy algorithms for Knapsack Fractional Problem, Job Sequencing Problem with the deadline, Huffman Coding. Minimum Spanning Tree: Prims and Kruskal Algorithm, Activity Selection problem. Dynamic Programming: Understanding of dynamic programming approach, Algorithms for 0/1 Knapsack problem, Longest Common Subsequence problem, Travelling Salesman Problem. Single Source Shortest Path: BellmanFord Algorithm. All-Pair shortest path problem: Floyd-Warshall algorithm. OBST, Coin change problem, Matrix Chain Multiplication."
        }
      ]
    },
    4: {
      topics: [
        {
          title: "Advanced data structures and computational complexity",
          link: "https://example.com/advanced-data-structures-computational-complexity",
          description: "Understanding of Back Tracking,Recursive Back Tracking, Iterative Back Tracking, N-Queen’s Problem, Hamiltonian Cycle, Knight’s Tour Problem, Lower-Bound Theory, Graph Coloring Problem. Branch & Bound: Understanding of Branch & Bound, FIFO Branch & Bound, Least Cost Branch & Bound, 0/1 Knapsack problem using FIFO Branch & Bound and LC Branch & Bound solution. Computational Complexity: Introduction to P, NP, NP-Hard and NP-Complete; Deterministic & non-deterministic algorithms."
        }
      ]
    }
  };

  return (
    <div className="app-container">

      <div className="w-min m-40 flex justify-center text-center">
      </div>
      <div className="table-wrapper">
        <h1>Syllabus for Programming in Python</h1>
        <MyTable topics={pythonSyllabus} />
        <h1>Syllabus for Data Structures and Algorithms (DAA)</h1>
        <MyTable topics={DAA_Syllabus} />
      </div>
    </div>
  );
}
