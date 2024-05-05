# Data Structures and Algorithms

These are self-notes on various data structures and algorithms. It includes descriptions of the data structures and algorithms along with their pseudocodes. Please note that the descriptions and pseudocodes provided here are simplified for understanding purposes and may not be the most optimized or complete implementations.

## Data Structures

### Array

Description: An array is a sequential collection of elements of the same type. It allows fast access to individual elements using their index.

> **Pseudocode:**

```c
// Initialize an array
array = [element1, element2, element3, ...]

// Access an element at a specific index
value = array[index]

// Modify the value of an element
array[index] = new_value

// Get the length of the array
length = array.length
```

### Linked List

Description: A linked list is a linear data structure consisting of nodes, where each node contains a value and a reference to the next node. It allows dynamic memory allocation and efficient insertion and deletion operations.

> **Pseudocode:**

```c
// Node definition
Node:
    value
    next

// Initialize a linked list
list = None

// Insert a new node at the beginning
new_node = Node(value)
new_node.next = list
list = new_node

// Insert a new node at the end
new_node = Node(value)
if list is None:
    list = new_node
else:
    current = list
    while current.next is not None:
        current = current.next
    current.next = new_node

// Delete a node with a given value
previous = None
current = list
while current is not None:
    if current.value == target_value:
        if previous is None:
            list = current.next
        else:
            previous.next = current.next
        break
    previous = current
    current = current.next
```

### Stack

Description: A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle. It allows the addition of elements (push) and removal of elements (pop) from the top.

> **Pseudocode:**

```c
// Initialize an empty stack
stack = []

// Push an element onto the stack
stack.push(element)

// Pop the top element from the stack
top_element = stack.pop()

// Peek the top element without removing it
top_element = stack[-1]

// Check if the stack is empty
is_empty = (stack.length == 0)
```

### Queue

Description: A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle. It allows the addition of elements (enqueue) at the rear and removal

of elements (dequeue) from the front.

> **Pseudocode:**

```c
// Initialize an empty queue
queue = []

// Enqueue an element to the rear of the queue
queue.enqueue(element)

// Dequeue the element from the front of the queue
front_element = queue.dequeue()

// Peek the element at the front without removing it
front_element = queue[0]

// Check if the queue is empty
is_empty = (queue.length == 0)
```

### Hash Table

Description: A hash table (also known as a hash map) is a data structure that uses a hash function to map keys to values. It provides efficient insertion, deletion, and retrieval operations.

> **Pseudocode:**

```c
// Initialize a hash table
table = {}

// Insert a key-value pair into the hash table
table[key] = value

// Retrieve the value associated with a key
value = table[key]

// Delete a key-value pair from the hash table
delete table[key]

// Check if a key exists in the hash table
exists = (key in table)

// Get the number of key-value pairs in the hash table
size = table.size()
```

### Binary Tree

Description: A binary tree is a hierarchical data structure in which each node has at most two children, referred to as the left child and the right child.

> **Pseudocode:**

```c
// Node definition
Node:
    value
    left_child
    right_child

// Create a binary tree
tree = Node(root_value)
tree.left_child = left_subtree
tree.right_child = right_subtree
```

### Heap

Description: A heap is a complete binary tree that satisfies the heap property. In a min-heap, for any given node, the value of that node is less than or equal to the values of its children. In a max-heap, the value of the node is greater than or equal to the values of its children. Heaps are often used to implement priority queues.

> **Pseudocode:**

```c
// Heapify a subtree rooted at given index
heapify(array, n, index):
    largest = index
    left = 2 * index + 1
    right = 2 * index + 2

    if left < n and array[left] > array[largest]:
        largest = left

    if right < n and array[right] > array[largest]:
        largest = right

    if largest != index:
        swap(array[index], array[largest])
        heapify(array, n, largest)

// Build a heap from an array
build_heap(array):
    n = array.length
    for i from (n / 2) - 1 down to 0:
        heapify(array, n, i)
```

### Trie

Description: A trie, also known as a prefix tree, is a tree-like data structure used to efficiently store and retrieve strings. It is commonly used in applications such as autocomplete, spell-checking, and IP routing.

> **Pseudocode:**

```c
// Trie Node
Node:
    value
    is_end_of_word
    children

// Initialize a trie
trie = Node()

// Insert a word into the trie
insert_word(trie, word):
    current = trie
    for char in word:
        if char not in current.children:
            current.children[char] = Node()
        current = current.children[char]
    current.is_end_of_word = True

// Search for a word in the trie
search_word(trie, word):
    current = trie
    for char in word:
        if char not in current.children:
            return False
        current = current.children[char]
    return current.is_end_of_word

// Delete a word from the trie
delete_word(trie, word):
    delete_word_helper(trie, word, 0)

delete_word_helper(node, word, index):
    if index == len(word):
        if node.is_end_of_word:
            node.is_end_of_word = False
            return len(node.children) == 0
        return False

    char = word[index]
    if char in node.children:
        child = node.children[char]
        should_delete_child = delete_word_helper(child, word, index + 1)
        if should_delete_child:
            del node.children[char]
            return len(node.children) == 0
    return False
```

### Graph

Description: A graph is a non-linear data structure consisting of nodes (vertices) connected by edges. Graphs are used to model relationships between objects and solve problems such as route finding, social network analysis, and optimization.

> **Pseudocode:**

```c
// Graph
Graph:
    vertices
    edges

// Add a vertex to the graph
add_vertex(graph, vertex):
    graph.vertices.add(vertex)
    graph.edges[vertex] = []

// Add an edge between two vertices in the graph
add_edge(graph, vertex1, vertex2):
    graph.edges[vertex1].add(vertex2)
    graph.edges[vertex2].add(vertex1)

// Remove an edge between two vertices in the graph
remove_edge(graph, vertex1, vertex2):
    graph.edges[vertex1].remove(vertex2)
    graph.edges[vertex2].remove(vertex1

)

// Check if an edge exists between two vertices in the graph
has_edge(graph, vertex1, vertex2):
    return vertex2 in graph.edges[vertex1]

// Get the neighbors of a vertex in the graph
get_neighbors(graph, vertex):
    return graph.edges[vertex]
```

### Dijkstra's Algorithm

Description: Dijkstra's algorithm is a popular algorithm for finding the shortest path between nodes in a graph with non-negative edge weights. It maintains a priority queue of nodes and greedily selects the node with the shortest distance from the source.

> **Pseudocode:**

```c
// Dijkstra's Algorithm
dijkstra(graph, source):
    distances = {}
    for each vertex in graph.vertices:
        distances[vertex] = infinity
    distances[source] = 0

    priority_queue = MinHeap()
    priority_queue.insert(source, 0)

    while priority_queue is not empty:
        current_vertex, current_distance = priority_queue.extract_min()

        if current_distance > distances[current_vertex]:
            continue

        for neighbor in graph.get_neighbors(current_vertex):
            distance = current_distance + edge_weight(current_vertex, neighbor)
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                priority_queue.insert(neighbor, distance)

    return distances
```

### Kruskal's Algorithm

Description: Kruskal's algorithm is used to find the minimum spanning tree of a connected, weighted graph. It starts with an empty set of edges and iteratively adds the shortest edge that does not create a cycle in the graph.

> **Pseudocode:**

```c
// Kruskal's Algorithm
kruskal(graph):
    edges = []
    for each vertex in graph.vertices:
        make_set(vertex)

    sorted_edges = sort_edges_by_weight(graph.edges)

    for edge in sorted_edges:
        u, v = edge.vertices
        if find_set(u) != find_set(v):
            union(u, v)
            edges.append(edge)

    return edges
```

## Algorithms

## Sorting

### Bubble Sort

Description: Bubble sort is a simple sorting algorithm that repeatedly swaps adjacent elements if they are in the wrong order. It continues until the entire list is sorted.

> **Pseudocode:**

```c
// Bubble Sort
bubble_sort(array):
    n = array.length
    for i from 0 to n-1:
        for j from 0 to n-i-1:
            if array[j] > array[j+1]:
                swap(array[j], array[j+1])
```

### Selection Sort

Description: Selection sort is a sorting algorithm that selects the smallest element from the unsorted portion of the list and swaps it with the element at the beginning of the unsorted portion. It continues until the entire list is sorted.

> **Pseudocode:**

```c
// Selection Sort
selection_sort(array):
    n = array.length
    for i from 0 to n-1:
        min_index = i
        for j from i+1 to n-1:
            if array[j] < array[min_index]:
                min_index = j
        swap(array[min_index], array[i])
```

### Insertion Sort

Description: Insertion sort is a sorting algorithm that builds a sorted portion of the list by iteratively inserting elements from the unsorted portion into their correct positions. It continues until the entire list is sorted.

> **Pseudocode:**

```c
// Insertion Sort
insertion_sort(array):
    n = array.length
    for i from 1 to n-1:
        key = array[i]
        j = i - 1
        while j >= 0 and array[j] > key:
            array[j+1] = array[j]
            j = j - 1
        array[j+1] = key
```

### Merge Sort

Description: Merge sort is a divide-and-conquer sorting algorithm that divides the list into smaller sublists, sorts them recursively, and then merges them back into a sorted list.

> **Pseudocode:**

```c
// Merge Sort
merge_sort(array):
    if array.length <= 1:
        return array
    mid = array.length / 2


    left = merge_sort(array[0:mid])
    right = merge_sort(array[mid:])
    return merge(left, right)

// Merge two sorted arrays into one sorted array
merge(left, right):
    result = []
    i = 0
    j = 0
    while i < left.length and j < right.length:
        if left[i] <= right[j]:
            result.push(left[i])
            i = i + 1
        else:
            result.push(right[j])
            j = j + 1
    while i < left.length:
        result.push(left[i])
        i = i + 1
    while j < right.length:
        result.push(right[j])
        j = j + 1
    return result
```

### Quick Sort

Description: Quick sort is a divide-and-conquer sorting algorithm that selects a pivot element, partitions the list into two sublists (elements smaller than the pivot and elements larger than the pivot), and recursively sorts the sublists.

> **Pseudocode:**

```c
// Quick Sort
quick_sort(array, low, high):
    if low < high:
        pivot = partition(array, low, high)
        quick_sort(array, low, pivot-1)
        quick_sort(array, pivot+1, high)

// Partition the array and return the pivot index
partition(array, low, high):
    pivot = array[high]
    i = low - 1
    for j from low to high-1:
        if array[j] <= pivot:
            i = i + 1
            swap(array[i], array[j])
    swap(array[i+1], array[high])
    return i + 1
```

## Searching

### Linear Search

Description: Linear search is a simple searching algorithm that sequentially checks each element in the list until the target element is found or the end of the list is reached.

> **Pseudocode:**

```c
// Linear Search
linear_search(array, target):
    n = array.length
    for i from 0 to n-1:
        if array[i] == target:
            return i
    return -1  // Target not found
```

### Binary Search

Description: Binary search is an efficient searching algorithm for sorted lists. It repeatedly divides the search interval in half and compares the target element with the middle element.

> **Pseudocode:**

```c
// Binary Search
binary_search(array, target):
    low = 0
    high = array.length - 1
    while low <= high:
        mid = (low + high) / 2
        if array[mid] == target:
            return mid
        else if array[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1  // Target not found
```

### Graph Traversal

### Depth-First Search (DFS)

Description: Depth-first search is a graph traversal algorithm that explores as far as possible along each branch before backtracking. It uses a stack (or recursion) to keep track of the visited nodes.

> **Pseudocode:**

```c
// Depth-First Search (DFS)
dfs(graph, start):
    stack = [start]
    visited = []
    while stack is not empty:
        node = stack.pop()
        if node not in visited:
            visited.add(node)
            for neighbor in graph[node]:
                stack.push(neighbor)
    return visited
```

### Breadth-First Search (BFS)

Description: Breadth-first search is a graph traversal algorithm that explores all the vertices of a graph in breadth-first order. It uses a queue to keep track of the visited nodes.

> **Pseudocode:**

```c
// Breadth-First Search (BFS)
b

fs(graph, start):
    queue = [start]
    visited = []
    while queue is not empty:
        node = queue.dequeue()
        if node not in visited:
            visited.add(node)
            for neighbor in graph[node]:
                queue.enqueue(neighbor)
    return visited
```
