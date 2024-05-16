# MATLAB/Octave

This cheat sheet provides a reference for performing various operations and experiments in MATLAB/Octave. It covers creating arrays, performing arithmetic and matrix operations, manipulating matrices, generating commands on vectors, evaluating expressions, plotting functions, solving differential equations, writing scripts, generating waveforms, and creating basic 2D and 3D plots.

## Creating Arrays and Performing Operations

1. **Creating One-Dimensional Arrays:**

   ```matlab
   % Row Vector
   x = [1, 2, 3, 4, 5]

   % Column Vector
   y = [1; 2; 3; 4; 5]
   ```

1. **Creating Two-Dimensional Arrays (Matrix of given size):**

   ```matlab
   % Matrix with 3 rows and 4 columns
   A = zeros(3, 4)
   ```

1. **Performing Arithmetic Operations:**

   ```matlab
   % Addition
   C = A + B

   % Subtraction
   D = A - B

   % Multiplication
   E = A * B

   % Exponentiation
   F = A ^ 2
   ```

1. **Performing Matrix Operations:**

   ```matlab
   % Inverse
   inv_A = inv(A)

   % Transpose
   A_transpose = A'

   % Rank
   rank_A = rank(A)

   % Plotting
   plot(A)
   ```

## Matrix Manipulations

1. **Concatenating Matrices:**

   ```matlab
   % Horizontal Concatenation
   C = [A, B]

   % Vertical Concatenation
   D = [A; B]
   ```

1. **Indexing, Sorting, Shifting, Reshaping, Resizing, and Flipping:**

   ```matlab
   % Indexing
   element = A(2, 3)

   % Sorting
   sorted_A = sort(A)

   % Shifting
   shifted_A = circshift(A, [1, 2])

   % Reshaping
   reshaped_A = reshape(A, [2, 6])

   % Resizing
   resized_A = imresize(A, [4, 4])

   % Flipping
   flipped_A = fliplr(A)
   ```

1. **Relational and Logical Operations:**

   ```matlab
   % Relational Operations
   greater_than = X > Y
   less_than_equal = X <= Y

   % Logical Operations
   logical_and = X & Y
   logical_or = X | Y
   logical_not = ~X
   logical_xor = xor(X, Y)
   ```

## Generating Commands on Vectors

1. **Sum of Elements:**

   ```matlab
   sum_X = sum(X)
   ```

1. **Running Sum:**

   ```matlab
   running_sum = cumsum(X)
   ```

1. **Generating a Random Sequence:**

   ```matlab
   random_sequence = rand(1, N)

   % Plotting
   plot(random_sequence)
   ```

## Evaluating Expressions and Plotting Functions

1. **Rounding to the Nearest Integer:**

   ```matlab
   rounded_value = round(expression)
   floor_value = floor(expression)
   ceil_value = ceil(expression)
   fix_value = fix(expression)
   ```

1. **Trigonometric Functions:**

   ```matlab
   t = linspace(0, duration, 1000);

   sin_t = sin(t)
   cos_t = cos(t)
   tan_t = tan(t)
   sec_t = sec(t)
   csc_t = csc(t)
   cot_t = cot(t)
   % Plotting
   plot(t, sin_t, t, cos_t, t, tan_t, t, sec_t, t, csc_t, t, cot_t)
   legend('sin(t)', 'cos(t)', 'tan(t)', 'sec(t)', 'csc(t)', 'cot(t)')
   ```

1. **Logarithmic and Other Functions:**

   ```matlab
   log_A = log(A)
   log10_A = log10(A)
   sqrt_A = sqrt(A)
   nth_root_A = nthroot(A, n)
   ```

## Vector and Function Plotting

1. **Creating a Vector:**

   ```matlab
   n = 1:100;
   Xn = (-1).^(n+1)./(2.*n-1);
   ```

1. **Adding Up Elements of the Vector:**

   ```matlab
   sum_Xn = sum(Xn)
   ```

1. **Plotting Functions:**

   ```matlab
   x = linspace(0, 4, 100);

   y1 = x;
   y2 = x.^3;
   y3 = exp(x);
   y4 = exp(x.^2);

   % Rectangular Plot
   plot(x, y1, x, y2, x, y3, x, y4)
   legend('x', 'x^3', 'e^x', 'e^{x^2}')
   ```

## Sinusoidal Signal Generation

```matlab
t = linspace(0, duration, 1000);
frequency = 1;
amplitude = 1;
x = amplitude * sin(2 * pi * frequency * t);

% Titling
title('Sinusoidal Signal')

% Labeling
xlabel('Time')
ylabel('Amplitude')

% Adding Text
text(0.5, 0.5, 'Example Text')

% Adding Legends
legend('Signal')

% Printing Text in Greek Letters
text(0.5, 0.5, '\alpha')

% Plotting Multiple and Subplot
figure;
subplot(2, 2, 1);
plot(t, x);
title('Signal')
subplot(2, 2, 2);
plot(t, 2*x);
title('2X')
subplot(2, 2, 3);
plot(t, 4*x);
title('4X')
subplot(2, 2, 4);
plot(t, 0.25*x);
title('0.25X')
```

## Solving Ordinary Differential Equations

```matlab
% First Order ODE
dydt = @(t, y) y - t;
[t, y] = ode45(dydt, [0, 10], 0);

% Second Order ODE
dy2dt2 = @(t, y) [y(2); -sin(y(1))];
[t2, y2] = ode45(dy2dt2, [0, 10], [0, 1]);

% Third Order ODE
dy3dt3 = @(t, y) [y(2); y(3); -y(1) - y(2) - y(3)];
[t3, y3] = ode45(dy3dt3, [0, 10], [0, 1, 2]);

% Plotting
plot(t, y, t2, y2(:, 1), t3, y3(:,

 1))
legend('First Order', 'Second Order', 'Third Order')
```

## Writing Scripts

```matlab
% Script 1
T = input('Enter a value for T: ');

if T < 100
    h = T - 10;
else
    h = 0.45 * T + 900;
end

disp(h)

% Test Case 1
T1 = 5;
h1 = -5;

% Test Case 2
T2 = 110;
h2 = 949.5;
```

## Generating Square Waves

```matlab
t = linspace(0, 1, 1000);
frequency1 = 1;
frequency2 = 3;
amplitude1 = 1;
amplitude2 = 0.5;

x1 = amplitude1 * sin(2 * pi * frequency1 * t);
x2 = amplitude2 * sin(2 * pi * frequency2 * t);

square_wave = x1 + x2;

% Plotting
plot(t, square_wave)
title('Square Wave')
```

## Basic 2D and 3D Plots

1. **Parametric Space Curve:**

   ```matlab
   t = linspace(0, 2*pi, 100);
   x = cos(t);
   y = sin(t);
   z = t;

   % 2D Plot
   plot(x, y)

   % 3D Plot
   plot3(x, y, z)
   ```

1. **Polygons with Vertices:**

   ```matlab
   x = [0, 1, 1, 0];
   y = [0, 0, 1, 1];

   % 2D Plot
   fill(x, y, 'r')

   % 3D Plot
   fill3(x, y, z, 'r')
   ```

1. **3D Contour Lines:**

   ```matlab
   [X, Y] = meshgrid(-2:0.1:2, -2:0.1:2);
   Z = X.^2 + Y.^2;

   % 3D Plot
   mesh(X, Y, Z)

   % Contour Lines
   contour(X, Y, Z)
   ```

1. **Pie and Bar Charts:**

   ```matlab
   % Pie Chart
   values = [25, 35, 20, 10, 10];
   labels = {'Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'};
   pie(values, labels)

   % Bar Chart
   x = [1, 2, 3, 4, 5];
   y = [10, 15, 8, 12, 6];
   bar(x, y)
   ```
