#include <iostream>
#include <array>
using namespace std;

// int partation(int arr[],int s, int e){

//     int pivot = arr[s];
//     int index = 0;

//     for (int i = s+1; i <=e; i++){
//         if(arr[i]<=pivot){
//             index++;
//         }
//     }

//     int pivotIndex = s + index;
    
//     swap(arr[pivotIndex],arr[s]);

//     int i=s,j=e;

//     while(i<pivotIndex && j > pivotIndex){

//         while(arr[i] <= pivot){
//             i++;
//         }
        
//         while(arr[j] >= pivot){
//             j--;
//         }

//         if(arr[i]<=pivotIndex&&arr[j]>=pivotIndex){
//             swap(arr[i++],arr[j--]);
//         }
//     }
//     return pivotIndex;
// }

// void quickSort(int arr[], int s, int e){
//     if(s>e)
//         return;

//     int mid = partation(arr,s,e);

//     quickSort(arr,0,mid-1);

//     quickSort(arr,mid+1,e);

// }

void swap(int *a, int *b){
    int temp = *a;
    *a = *b;
    *b = temp; 
}

void swapByValue(int a, int b){
    int temp = a;
    a = b;
    b = temp; 
}

int main(){
    
    // int arr[]={3,1,4,5,2,6,8,7,9};

    // int len = 9;
    
    // quickSort(arr,0,len);

    // for (int i = 0; i < len; i++)
    // {/
    //     cout << arr[i] << " "; 
    // }
    // return 0;

    // int *x,y;
    // y = 10;
    // x=&y;
    // // cout<< x<<endl;
    // cout<<*x<<endl;
    
//     const int SIZE = 5; // Size of the array
//     int arr[SIZE]; // Declare the array

//     // Insert values into the array
//     cout << "Enter " << SIZE << " integers:\n";
//     for(int i = 0; i < SIZE; i++) {
        // cout << "Value " << i + 1 << ": ";
//         cin >> arr[i];
//     }

//     // // Display values in the array
// int sum =0;
//     cout << "\nThe sum of the values in the array are:\n";
//     for(int i = 0; i < SIZE; i++) {

//         sum+=arr[i];
//     }
//     cout << "Sum: " << sum;

//     cout << endl;
    // int a=1,b=2;
    // printf("Before swapping: a = %d, b = %d\n", a, b);
    // swap(&a,&b);
    // printf("After swapping: a = %d, b = %d\n", a, b);

    int arr[5],sizeArr = 5;
    int *p;
    p =arr;

    for (int i = 0; i < sizeArr; i++)
    {
        cin>>p[i];
    }

    for (int i = 0; i < sizeArr; i++)
    {
        cout<<*(p+i);
    }

    return 0;

}