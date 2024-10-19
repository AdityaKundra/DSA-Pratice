#include <iostream>
#include <vector>

using namespace std;

void subsetSum(vector<int>& nums, int target, vector<int>& path, int index, vector<vector<int>>& result) {
    if (target == 0) {
        result.push_back(path);
        return;
    }

    for (int i = index; i < nums.size(); ++i) {
        if (nums[i] <= target) {
            path.push_back(nums[i]);
            subsetSum(nums, target - nums[i], path, i + 1, result);
            path.pop_back();
        }
    }
}

vector<vector<int>> subsetSum(vector<int>& nums, int target) {
    vector<vector<int>> result;
    vector<int> path;
    subsetSum(nums, target, path, 0, result);
    return result;
}

int main() {
    vector<int> nums = {1, 2, 3, 4, 5};
    int target = 7;
    vector<vector<int>> result = subsetSum(nums, target);

    for (const auto& subset : result) {
        cout << "[ ";
        for (const auto& num : subset) {
            cout << num << " ";
        }
        cout << "]" << endl;
    }

return 0;
}