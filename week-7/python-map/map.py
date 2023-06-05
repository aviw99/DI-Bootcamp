import matplotlib.pyplot as plt
import numpy as np

# Data for the heat map
battles = ['Fort Sumter', 'First Bull Run', 'Shiloh', 'Antietam', 'Gettysburg', 'Vicksburg', 'Chickamauga']
sides = ['Confederate', 'Confederate', 'Union', 'Union', 'Union', 'Union', 'Confederate']
losses = [4, 6, 13, 23, 28, 19, 34]
wins = [1, 0, 2, 1, 1, 1, 0]
deaths = [84, 460, 3508, 2104, 7343, 4196, 16600]
notable_figures = ['Beauregard', 'Jackson', 'Grant', 'McClellan', 'Lee', 'Sherman', 'Bragg']

# Create the heat map
fig, ax = plt.subplots(figsize=(10, 6))
heatmap = ax.imshow([losses, wins, deaths], cmap='YlOrRd', aspect='auto')

# Set x-axis ticks and labels
ax.set_xticks(np.arange(len(battles)))
ax.set_xticklabels(battles, rotation=45, ha='right')

# Set y-axis ticks and labels
ax.set_yticks(np.arange(3))
ax.set_yticklabels(['Losses', 'Wins', 'Deaths'])

# Add colorbar
cbar = plt.colorbar(heatmap, ax=ax)
cbar.set_label('Counts')

# Add data labels to the heatmap
for i in range(len(battles)):
    for j in range(3):
        text = ax.text(i, j, [losses, wins, deaths][j][i],
                       ha='center', va='center', color='black')

# Set the title and labels
ax.set_title('US Civil War Battles Heat Map')
ax.set_xlabel('Battles')
ax.set_ylabel('Categories')

# Show the plot
plt.tight_layout()
plt.show()
