#include <iostream>
#include <vector>
#include <algorithm>
#include <cmath>
#include <limits>

using namespace std;

// Function to calculate Euclidean distance between two cities
double calculate_distance(pair<int, int> city1, pair<int, int> city2) {
    return sqrt(pow(city1.first - city2.first, 2) + pow(city1.second - city2.second, 2));
}

// Function to calculate total distance of a path
double total_distance(vector<int>& path, vector<pair<int, int>>& cities) {
    double dist = 0;
    int n = path.size();
    for (int i = 0; i < n - 1; ++i) {
        dist += calculate_distance(cities[path[i]], cities[path[i + 1]]);
    }
    dist += calculate_distance(cities[path[n - 1]], cities[path[0]]); // Return to the starting city
    return dist;
}

// Brute-force approach to solve TSP
pair<double, vector<int>> brute_force_tsp(vector<pair<int, int>>& cities) {
    int n = cities.size();
    vector<int> path(n);
    for (int i = 0; i < n; ++i) {
        path[i] = i;
    }

    double min_distance = numeric_limits<double>::infinity();
    vector<int> optimal_path;

    do {
        double dist = total_distance(path, cities);
        if (dist < min_distance) {
            min_distance = dist;
            optimal_path = path;
        }
    } while (next_permutation(path.begin() + 1, path.end()));

    return make_pair(min_distance, optimal_path);
}

// Nearest neighbor algorithm to solve TSP
pair<double, vector<int>> nearest_neighbor_tsp(vector<pair<int, int>>& cities) {
    int n = cities.size();
    vector<bool> visited(n, false);
    vector<int> path;
    path.push_back(0); // Start from city 0
    visited[0] = true;

    double total_dist = 0;

    for (int i = 0; i < n - 1; ++i) {
        int current_city = path.back();
        double min_distance = numeric_limits<double>::infinity();
        int nearest_city = -1;

        for (int j = 0; j < n; ++j) {
            if (!visited[j]) {
                double distance = calculate_distance(cities[current_city], cities[j]);
                if (distance < min_distance) {
                    min_distance = distance;
                    nearest_city = j;
                }
            }
        }

        total_dist += min_distance;
        path.push_back(nearest_city);
        visited[nearest_city] = true;
    }

    total_dist += calculate_distance(cities[path.back()], cities[0]); // Return to the starting city
    return make_pair(total_dist, path);
}

int main() {
    // Example usage
    vector<pair<int, int>> cities = {{0, 0}, {1, 2}, {3, 1}, {5, 3}};

    // Brute-force approach
    pair<double, vector<int>> brute_force_result = brute_force_tsp(cities);
    cout << "Optimal Distance: " << brute_force_result.first << endl;
    cout << "Optimal Path: ";
    for (int city : brute_force_result.second) {
        cout << city << " ";
    }
    cout << endl;

    // Nearest neighbor algorithm
    pair<double, vector<int>> nearest_neighbor_result = nearest_neighbor_tsp(cities);
    cout << "Approximate Distance: " << nearest_neighbor_result.first << endl;
    cout << "Approximate Path: ";
    for (int city : nearest_neighbor_result.second) {
        cout << city << " ";
    }
    cout << endl;

    // Calculate error in approximation
    double error = ((nearest_neighbor_result.first - brute_force_result.first) / brute_force_result.first) * 100;
    cout << "Error in Approximation: " << error << "%" << endl;

    return 0;
}
