import matplotlib.pyplot as plt
import numpy as np
from mpl_toolkits.mplot3d import Axes3D


def func1():
    x = np.linspace(0, 10, 100)
    y = np.sin(x)

    plt.plot(x, y)
    plt.title('Sine Wave')
    plt.xlabel('X-axis')
    plt.ylabel('Y-axis')
    plt.show()


def func2():
    categories = ['A', 'B', 'C', 'D', 'E']
    values = [25, 40, 30, 35, 20]

    plt.bar(categories, values)
    plt.title('Bar Chart Example')
    plt.xlabel('Categories')
    plt.ylabel('Values')
    plt.show()


def func3():
    x = np.random.rand(100)
    y = np.random.rand(100)
    colors = np.random.rand(100)
    sizes = 1000 * np.random.rand(100)

    plt.scatter(x, y, c=colors, s=sizes, alpha=0.5)
    plt.title('Scatter Plot Example')
    plt.xlabel('X-axis')
    plt.ylabel('Y-axis')
    plt.show()


def func4():
    labels = ['A', 'B', 'C', 'D']
    sizes = [15, 30, 45, 10]
    explode = (0, 0.1, 0, 0)

    plt.pie(sizes, explode=explode, labels=labels, autopct='%1.1f%%', shadow=True)
    plt.title('Pie Chart Example')
    plt.axis('equal')
    plt.show()


def func5():
    data = np.random.randn(1000)

    plt.hist(data, bins=30)
    plt.title('Histogram Example')
    plt.xlabel('Values')
    plt.ylabel('Frequency')
    plt.show()


def func6():
    # Generate synthetic data
    x = np.linspace(-5, 5, 100)
    y = np.linspace(-5, 5, 100)
    X, Y = np.meshgrid(x, y)
    Z = np.sin(np.sqrt(X**2 + Y**2)) / (np.sqrt(X**2 + Y**2))

    # Create a 3D plot
    fig = plt.figure(figsize=(8, 6))
    ax = fig.add_subplot(111, projection='3d')
    ax.plot_surface(X, Y, Z, cmap='magma', edgecolor='none', alpha=0.8)

    # Customize the plot
    ax.set_title('Cool 3D Surface Plot', fontsize=16)
    ax.set_xlabel('X-axis', fontsize=12)
    ax.set_ylabel('Y-axis', fontsize=12)
    ax.set_zlabel('Z-axis', fontsize=12)
    ax.grid(False)

    # Adjust viewpoint
    ax.view_init(elev=35, azim=-45)

    # Add colorbar
    cbar = fig.colorbar(ax.plot_surface(X, Y, Z, cmap='magma'), shrink=0.8, aspect=20)
    cbar.set_label('Amplitude', fontsize=12)

    # Add cool lighting effects
    ax.light_sources = [('dir', (1, 1, 1)), ('dir', (-1, -1, 0))]
    ax.set_facecolor('black')

    # Show the plot
    plt.tight_layout()
    plt.show()


func6()

